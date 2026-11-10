import { useEffect, useRef } from "react";

/**
 * Sayfanın arkasında dolaşan neon "</>" ağı (yalnızca süs).
 *
 * Her ikon kendi yönünde yavaşça ilerler, ekranın bir kenarından çıkınca
 * karşı kenardan geri girer. Birbirine yakın ikonlar ince bir çizgiyle
 * bağlanır; uzaklaştıkça çizgi solar. Böylece sürekli değişen bir
 * "takımyıldız" ağı oluşur.
 *
 * - Çizim <canvas> üzerinde yapılır (çok sayıda HTML öğesine göre çok daha hafif).
 * - Konumlar rastgeledir ve yalnızca tarayıcıda üretilir; önceden üretilen
 *   HTML'de yalnızca boş tuval vardır, bu yüzden uyuşmazlık sorunu olmaz.
 * - Sekme arka plandayken animasyon durur (pil ve işlemci tasarrufu).
 * - "Hareketi azalt" ayarı açık olanlarda ağ sabit bir resim olarak çizilir.
 * - Tema değişince renkler hemen güncellenir.
 */

/** icons.tsx içindeki CodeIcon ile aynı çizim (24×24 alanda) */
const ICON_PATH = "M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16";
/** Bu mesafeden (piksel) yakın ikonlar çizgiyle bağlanır */
const LINK = 160;
/** En fazla ikon sayısı; küçük ekranlarda alan oranında azalır */
const MAX_ICONS = 45;
/** Kaç piksel karelik alana bir ikon düşsün */
const AREA_PER_ICON = 14000;
/** İkonun önceden çizildiği küçük tuvalin boyutu (parlama payı dahil) */
const SPRITE = 64;
/** İkon, sprite içinde bu oranda yer kaplar; kalanı parlama payıdır */
const ICON_RATIO = 0.6;

// Koyu temada neon camgöbeği; açık temada beyaz zeminde görünsün diye koyu ton.
const PALETTE = {
  dark: { main: "34,227,255", alt: "127,241,255", line: 0.32, alpha: 0.75, glow: 10 },
  light: { main: "10,127,153", alt: "6,100,122", line: 0.38, alpha: 0.55, glow: 0 },
} as const;

type Point = { x: number; y: number; vx: number; vy: number; size: number; alt: boolean };

function newPoint(w: number, h: number): Point {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    size: 10 + Math.random() * 10,
    // Her dört ikondan biri biraz daha açık tonda: ağ tek düze görünmesin
    alt: Math.random() < 0.25,
  };
}

/** "</>" ikonunu parlamasıyla birlikte bir kez küçük bir tuvale çizer; her karede bu kopyalanır. */
function makeSprite(rgb: string, glow: number): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = c.height = SPRITE;
  const ctx = c.getContext("2d");
  if (!ctx) return c;
  const pad = (SPRITE * (1 - ICON_RATIO)) / 2;
  ctx.translate(pad, pad);
  ctx.scale((SPRITE * ICON_RATIO) / 24, (SPRITE * ICON_RATIO) / 24);
  ctx.strokeStyle = `rgb(${rgb})`;
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  if (glow) {
    ctx.shadowColor = `rgba(${rgb},0.9)`;
    ctx.shadowBlur = glow;
  }
  ctx.stroke(new Path2D(ICON_PATH));
  return c;
}

export function CodeNetwork() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let pts: Point[] = [];
    let raf = 0;
    let running = false;
    let palette: (typeof PALETTE)[keyof typeof PALETTE] = PALETTE.dark;
    let sprites = { main: makeSprite(palette.main, palette.glow), alt: makeSprite(palette.alt, palette.glow) };

    function applyTheme() {
      palette = root.dataset.theme === "light" ? PALETTE.light : PALETTE.dark;
      sprites = { main: makeSprite(palette.main, palette.glow), alt: makeSprite(palette.alt, palette.glow) };
    }

    // Ekran boyutu değişince tuvali yeniden ölçekler; ikon sayısını alana göre
    // ayarlar ama var olan ikonları silmez (mobilde adres çubuğu açılıp
    // kapanırken ağ baştan kurulup zıplamasın).
    function resize() {
      if (!canvas || !ctx) return;
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(MAX_ICONS, (w * h) / AREA_PER_ICON));
      while (pts.length < count) pts.push(newPoint(w, h));
      pts = pts.slice(0, count);
      for (const p of pts) {
        p.x = Math.min(p.x, w);
        p.y = Math.min(p.y, h);
      }
      draw();
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      // Önce çizgiler: ikonların ortasından değil, kenarından başlayıp biter
      ctx.lineWidth = 0.7;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i];
          const b = pts[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const d = Math.hypot(dx, dy);
          const gapA = a.size * 0.65;
          const gapB = b.size * 0.65;
          if (d >= LINK || d <= gapA + gapB) continue;
          const ux = dx / d;
          const uy = dy / d;
          ctx.strokeStyle = `rgba(${palette.main},${((1 - d / LINK) * palette.line).toFixed(3)})`;
          ctx.beginPath();
          ctx.moveTo(a.x + ux * gapA, a.y + uy * gapA);
          ctx.lineTo(b.x - ux * gapB, b.y - uy * gapB);
          ctx.stroke();
        }
      }

      // Sonra ikonlar
      ctx.globalAlpha = palette.alpha;
      for (const p of pts) {
        const s = p.size / ICON_RATIO;
        ctx.drawImage(p.alt ? sprites.alt : sprites.main, p.x - s / 2, p.y - s / 2, s, s);
      }
      ctx.globalAlpha = 1;
    }

    function step() {
      // Kenardan tamamen çıkınca karşı kenardan girsin (ikon yarım kaybolmasın)
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        const m = p.size;
        if (p.x < -m) p.x = w + m;
        else if (p.x > w + m) p.x = -m;
        if (p.y < -m) p.y = h + m;
        else if (p.y > h + m) p.y = -m;
      }
      draw();
      if (running) raf = requestAnimationFrame(step);
    }

    function play() {
      if (running || reduce) return;
      running = true;
      raf = requestAnimationFrame(step);
    }
    function pause() {
      running = false;
      cancelAnimationFrame(raf);
    }
    const onVisibility = () => (document.hidden ? pause() : play());

    applyTheme();
    resize();
    play();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const themeObserver = new MutationObserver(() => {
      applyTheme();
      draw();
    });
    themeObserver.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      pause();
      resizeObserver.disconnect();
      themeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}

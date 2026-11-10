import { useEffect, useRef } from "react";

/**
 * Ekrana girince 0'dan hedef sayıya kadar sayan rakam.
 *
 * Sayfa ilk üretildiğinde (prerender) ve JavaScript kapalıyken gerçek değer
 * görünür. Sayma efekti yalnızca tarayıcıda, bölüm ekrana girdiğinde çalışır.
 * Ekran okuyucular animasyonu değil, doğrudan son değeri okur.
 */
export function CountUp({ value, duration = 1400 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    // Bölüm henüz görünmüyorsa sayıyı sıfırla; görünür olunca saymaya başla.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;
    el.textContent = "0";

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          // Sona doğru yavaşlayan hareket (ease-out)
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = String(Math.round(value * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = String(value);
    };
  }, [value, duration]);

  return (
    <>
      <span className="sr-only">{value}</span>
      <span ref={ref} aria-hidden className="tabular-nums">
        {value}
      </span>
    </>
  );
}

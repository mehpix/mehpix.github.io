import type { CSSProperties } from "react";

import { CodeIcon } from "../icons";

/**
 * Sayfanın arkasında yavaşça süzülen neon "</>" kutucukları (yalnızca süs).
 *
 * - Konumlar sabittir (rastgele değil): sayfa önceden HTML olarak üretildiği
 *   için sunucu ve tarayıcıdaki çizimin birebir aynı olması gerekir.
 * - Her kutucuğun hızı ve başlangıç anı farklıdır; böylece hep birlikte değil,
 *   birbirinden bağımsız dolaşıyormuş gibi görünürler.
 * - Ekran okuyucular görmez (aria-hidden), tıklamaları engellemez.
 * - "Hareketi azalt" ayarı açık olanlarda app.css'teki genel kural
 *   animasyonu durdurur; kutucuklar yerinde sabit kalır.
 */
type Item = {
  /** Ekrandaki konum (yüzde) */
  x: number;
  y: number;
  /** Kutucuk boyutu (piksel) */
  size: number;
  /** Bir tam turun süresi (saniye) */
  duration: number;
  /** Negatif gecikme: animasyon sayfa açıldığında turun ortasından başlar */
  delay: number;
  /** Ters yönde dolaşsın mı */
  reverse?: boolean;
  /** Küçük ekranlarda gizlensin mi (kalabalık görünmesin) */
  desktopOnly?: boolean;
  /** Sayfanın ortasına yakın olanlar daha soluk olsun */
  faint?: boolean;
};

// Çoğu kutucuk sayfa kenarlarında dolaşır ki metinlerin üstüne gelmesin;
// ortadakiler (faint) daha soluktur.
const ITEMS: readonly Item[] = [
  { x: 4, y: 12, size: 44, duration: 26, delay: -3 },
  { x: 92, y: 8, size: 36, duration: 32, delay: -12, reverse: true },
  { x: 87, y: 32, size: 28, duration: 24, delay: -7, desktopOnly: true },
  { x: 8, y: 42, size: 30, duration: 30, delay: -18, reverse: true, desktopOnly: true },
  { x: 93, y: 58, size: 46, duration: 28, delay: -9 },
  { x: 3, y: 76, size: 34, duration: 34, delay: -22 },
  { x: 85, y: 84, size: 32, duration: 29, delay: -15, desktopOnly: true },
  { x: 30, y: 3, size: 24, duration: 27, delay: -11, reverse: true, desktopOnly: true, faint: true },
  { x: 48, y: 92, size: 26, duration: 22, delay: -5, reverse: true, desktopOnly: true, faint: true },
  { x: 68, y: 96, size: 22, duration: 36, delay: -26, desktopOnly: true, faint: true },
];

export function FloatingCode() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {ITEMS.map((item) => (
        <div
          key={`${item.x}-${item.y}`}
          className={`floating-code absolute place-items-center ${item.desktopOnly ? "hidden md:grid" : "grid"}${item.faint ? " floating-code-faint" : ""}`}
          style={
            {
              left: `${item.x}%`,
              top: `${item.y}%`,
              width: item.size,
              height: item.size,
              animationDuration: `${item.duration}s`,
              animationDelay: `${item.delay}s`,
              animationDirection: item.reverse ? "reverse" : "normal",
            } satisfies CSSProperties
          }
        >
          <CodeIcon width="55%" height="55%" />
        </div>
      ))}
    </div>
  );
}

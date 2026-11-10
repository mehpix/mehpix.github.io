/**
 * Yatay olarak sürekli kayan kelime şeridi.
 * Kelimeler iki kez yan yana dizilir; ikinci kopya ekran okuyuculardan
 * gizlenir ki aynı metin iki kez okunmasın. Fare üzerine gelince durur;
 * "hareketi azalt" ayarı açık olan kullanıcılarda hiç kaymaz.
 */
export function Marquee({ items, reverse = false }: { items: readonly string[]; reverse?: boolean }) {
  return (
    <div className="group relative overflow-hidden border-y border-line bg-surface/60 py-5">
      {/* Kenarlarda yumuşak geçiş */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent"
      />
      <div
        className={`flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        <MarqueeRow items={items} />
        <MarqueeRow items={items} hidden />
      </div>
    </div>
  );
}

function MarqueeRow({ items, hidden = false }: { items: readonly string[]; hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <li
          key={`${item}-${i}`}
          className="flex items-center font-display text-xl font-bold tracking-wider text-fg/80 sm:text-2xl"
        >
          <span className="px-6">{item}</span>
          <span aria-hidden className="size-1.5 rounded-full bg-accent neon-box" />
        </li>
      ))}
    </ul>
  );
}

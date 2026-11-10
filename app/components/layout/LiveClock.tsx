import { useSyncExternalStore } from "react";

// Her saniye abonelere haber veren basit bir zamanlayıcı.
function subscribe(onTick: () => void) {
  const id = window.setInterval(onTick, 1000);
  return () => window.clearInterval(id);
}

// Saniye hassasiyetinde zaman; aynı saniye içinde aynı değeri döndürür.
const getSnapshot = () => Math.floor(Date.now() / 1000);
// Derleme sırasında (sunucuda) saat bilinmez; tarayıcıda açılınca dolar.
const getServerSnapshot = () => null;

const formatter = new Intl.DateTimeFormat("tr-TR", {
  timeZone: "Europe/Istanbul",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

/** Footer'daki canlı Türkiye saati. */
export function LiveClock({ label }: { label: string }) {
  const seconds = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const time = seconds === null ? "--:--:--" : formatter.format(seconds * 1000);

  return (
    <p className="inline-flex items-center gap-2 font-mono text-xs text-muted">
      <span aria-hidden className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-success/60" />
        <span className="relative inline-flex size-2 rounded-full bg-success" />
      </span>
      <span>
        {label} · <time className="tabular-nums text-fg">{time}</time>
      </span>
    </p>
  );
}

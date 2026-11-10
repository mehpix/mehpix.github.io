import type { ReactNode } from "react";

export type BadgeTone = "neutral" | "accent" | "success" | "warning";

const TONES: Record<BadgeTone, string> = {
  neutral: "border-line bg-surface-2 text-muted",
  accent: "border-accent/40 bg-accent/10 text-accent",
  success: "border-success/40 bg-success/10 text-success",
  warning: "border-warning/40 bg-warning/10 text-warning",
};

/**
 * Küçük durum etiketi ("Yayında", "Yakında", "Partner" gibi).
 * dot=true durum bildiren rozetlerde başa küçük bir nokta ekler.
 * lang: rozet metni büyük harfe çevrilirken hangi dilin kuralı uygulanacağı.
 * Türkçe kuralı "Arduino"yu "ARDUİNO" yapar; marka adlarında lang="en" verilir.
 */
export function Badge({
  tone = "neutral",
  dot = false,
  lang,
  children,
}: {
  tone?: BadgeTone;
  dot?: boolean;
  lang?: string;
  children: ReactNode;
}) {
  return (
    <span
      lang={lang}
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[0.7rem] font-medium tracking-wide uppercase ${TONES[tone]}`}
    >
      {dot && <span aria-hidden className="size-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
}

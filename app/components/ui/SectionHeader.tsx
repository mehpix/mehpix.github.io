import type { ReactNode } from "react";

/**
 * Bölüm başlığı: küçük üst etiket ("Portföyümüz / 01"), büyük başlık ve alt metin.
 * MicroCore düzenindeki numaralı bölüm yapısının MehPiX karşılığı.
 */
export function SectionHeader({
  eyebrow,
  index,
  title,
  subtitle,
  align = "left",
  as: Heading = "h2",
  id,
}: {
  eyebrow: string;
  index?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  id?: string;
}) {
  const centered = align === "center";
  return (
    <header className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p
        className={`flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-accent uppercase ${centered ? "justify-center" : ""}`}
      >
        <span aria-hidden className="h-px w-8 bg-accent/60" />
        <span>
          {eyebrow}
          {index && <span className="text-muted"> / {index}</span>}
        </span>
      </p>
      <Heading
        id={id}
        className={`mt-4 font-bold text-fg ${Heading === "h1" ? "text-4xl sm:text-6xl" : "text-3xl sm:text-5xl"}`}
      >
        {title}
      </Heading>
      {subtitle && <p className="mt-4 text-base text-muted sm:text-lg">{subtitle}</p>}
    </header>
  );
}

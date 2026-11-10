import type { ReactNode } from "react";

import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

/**
 * Alt sayfaların üst kısmı: ızgara dokulu arka plan, sayfa başlığı (h1)
 * ve kısa açıklama. İsteğe bağlı olarak başlığın üstüne (geri bağlantısı)
 * veya altına (butonlar) içerik eklenebilir.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  before,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  before?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow/10 blur-3xl"
      />
      <Container className="relative py-16 sm:py-24">
        {before}
        <SectionHeader as="h1" eyebrow={eyebrow} title={title} subtitle={subtitle} />
        {children}
      </Container>
    </section>
  );
}

import type { ReactNode } from "react";

import { Container } from "../ui/Container";

/**
 * Ana sayfadaki her bölümün ortak kabuğu: üst/alt boşluk ve içerik genişliği.
 * id verilirse menüden bu bölüme doğrudan atlanabilir ("/#projeler").
 */
export function Section({
  id,
  labelledBy,
  className = "",
  children,
}: {
  id?: string;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-20 sm:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

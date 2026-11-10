import { useI18n } from "~/i18n";
import { HOME_SECTIONS } from "~/lib/paths";

import { PlusIcon } from "../icons";
import { SectionHeader } from "../ui/SectionHeader";
import { Section } from "./Section";

/**
 * "Merak Edilenler / 06": açılır-kapanır sorular.
 * Tarayıcının kendi <details> öğesi kullanılır; JavaScript gerektirmez,
 * klavye ve ekran okuyucularla doğal olarak çalışır.
 */
export function FaqSection() {
  const { t } = useI18n();
  const s = t.home.faq;

  return (
    <Section id={HOME_SECTIONS.faq} labelledBy="sss-baslik">
      <SectionHeader id="sss-baslik" eyebrow={s.eyebrow} index="06" title={s.title} align="center" />
      <div className="mx-auto mt-12 max-w-3xl divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
        {s.items.map((item, i) => (
          <details key={item.q} open={i === 0} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left text-lg font-medium text-fg transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
              {item.q}
              <PlusIcon className="shrink-0 text-xl text-accent transition-transform duration-200 group-open:rotate-45" />
            </summary>
            <p className="-mt-1 px-6 pb-6 leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

import { Link } from "react-router";

import { useI18n } from "~/i18n";
import { HOME_SECTIONS, pathFor } from "~/lib/paths";

import { FaqList } from "../FaqList";
import { ArrowRightIcon } from "../icons";
import { SectionHeader } from "../ui/SectionHeader";
import { Section } from "./Section";

/**
 * "Merak Edilenler / 06": her konu grubunun ilk sorusu.
 * Tüm sorular /sss sayfasında.
 */
export function FaqSection() {
  const { lang, t } = useI18n();
  const s = t.home.faq;
  const items = t.faq.groups.flatMap((g) => g.items.slice(0, 1));

  return (
    <Section id={HOME_SECTIONS.faq} labelledBy="sss-baslik">
      <SectionHeader id="sss-baslik" eyebrow={s.eyebrow} index="06" title={s.title} align="center" />
      <div className="mx-auto mt-12 max-w-3xl">
        <FaqList items={items} openFirst />
        <p className="mt-6 text-center">
          <Link
            to={pathFor("faq", lang)}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
          >
            {s.more} <ArrowRightIcon />
          </Link>
        </p>
      </div>
    </Section>
  );
}

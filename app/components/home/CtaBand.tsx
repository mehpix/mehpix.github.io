import { useI18n } from "~/i18n";
import { HOME_SECTIONS, linkFor } from "~/lib/paths";
import { CONTACT_EMAIL } from "~/lib/site";

import { ArrowRightIcon, MailIcon } from "../icons";
import { ButtonLink } from "../ui/Button";
import { SectionHeader } from "../ui/SectionHeader";
import { Section } from "./Section";

/** Sayfa sonundaki çağrı bandı ve iletişim bilgisi. */
export function CtaBand() {
  const { lang, t } = useI18n();
  const s = t.home.cta;

  return (
    <Section id={HOME_SECTIONS.contact} labelledBy="iletisim-baslik" className="pt-0 pb-0 sm:pt-0 sm:pb-0">
      <div className="relative overflow-hidden rounded-3xl border border-accent/40 bg-surface px-6 py-16 neon-box sm:px-12 sm:py-20">
        <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 left-1/2 size-[32rem] -translate-x-1/2 rounded-full bg-glow/15 blur-3xl"
        />
        <div className="relative">
          <SectionHeader
            id="iletisim-baslik"
            eyebrow={s.eyebrow}
            title={s.title}
            subtitle={s.body}
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href={`mailto:${CONTACT_EMAIL}`} size="lg">
              <MailIcon /> {s.mail}
            </ButtonLink>
            <ButtonLink href={linkFor("projects", lang)} variant="outline" size="lg">
              {s.projects} <ArrowRightIcon />
            </ButtonLink>
          </div>
          <p className="mt-8 text-center font-mono text-sm">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="break-all text-muted underline decoration-line underline-offset-4 transition-colors hover:text-accent"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}

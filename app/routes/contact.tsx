import type { ReactNode } from "react";

import type { Route } from "./+types/contact";
import { ContactForm } from "~/components/contact/ContactForm";
import { ClockIcon, GithubIcon, MailIcon } from "~/components/icons";
import { LiveClock } from "~/components/layout/LiveClock";
import { PageHero } from "~/components/PageHero";
import { Card } from "~/components/ui/Card";
import { Container } from "~/components/ui/Container";
import { getDictionary, getLang, useI18n } from "~/i18n";
import { pageMeta } from "~/lib/meta";
import { CONTACT_EMAIL, LINKS } from "~/lib/site";

export function meta({ location }: Route.MetaArgs) {
  const lang = getLang(location.pathname);
  const { meta } = getDictionary(lang).pages.contact;
  return pageMeta({ page: "contact", lang, ...meta });
}

/** İletişim: form + e-posta, GitHub ve yerel saat kartları. */
export default function Contact() {
  const { t } = useI18n();
  const s = t.pages.contact;

  return (
    <>
      <PageHero eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />
      <Container className="grid gap-8 py-14 sm:py-20 lg:grid-cols-[1.6fr_1fr]">
        <Card className="p-6 sm:p-8">
          <h2 className="mb-6 text-2xl font-bold text-fg">{s.form.title}</h2>
          <ContactForm />
        </Card>

        <div className="grid content-start gap-4">
          <InfoCard icon={<MailIcon />} title={s.info.email}>
            <a href={`mailto:${CONTACT_EMAIL}`} className="break-all text-accent hover:text-accent-strong">
              {CONTACT_EMAIL}
            </a>
          </InfoCard>
          <InfoCard icon={<GithubIcon />} title={s.info.github} titleLang="en">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-strong"
            >
              github.com/mehpix
            </a>
          </InfoCard>
          <InfoCard icon={<ClockIcon />} title={s.info.time}>
            <LiveClock label={s.info.timeLabel} />
          </InfoCard>
        </div>
      </Container>
    </>
  );
}

// titleLang: marka adları ("GitHub") Türkçe büyük harf kuralıyla "GİTHUB" olmasın diye
function InfoCard({
  icon,
  title,
  titleLang,
  children,
}: {
  icon: ReactNode;
  title: string;
  titleLang?: string;
  children: ReactNode;
}) {
  return (
    <Card className="flex items-start gap-4">
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-xl text-accent">
        {icon}
      </span>
      <div className="min-w-0">
        <h2 lang={titleLang} className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
          {title}
        </h2>
        <div className="mt-1.5 text-sm">{children}</div>
      </div>
    </Card>
  );
}

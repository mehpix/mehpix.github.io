import type { Route } from "./+types/faq";
import { FaqList } from "~/components/FaqList";
import { ArrowRightIcon } from "~/components/icons";
import { PageHero } from "~/components/PageHero";
import { ButtonLink } from "~/components/ui/Button";
import { Card } from "~/components/ui/Card";
import { Container } from "~/components/ui/Container";
import { getDictionary, getLang, useI18n } from "~/i18n";
import { pageMeta } from "~/lib/meta";
import { pathFor } from "~/lib/paths";

export function meta({ location }: Route.MetaArgs) {
  const lang = getLang(location.pathname);
  const { meta } = getDictionary(lang).pages.faq;
  return pageMeta({ page: "faq", lang, ...meta });
}

/** Tüm sorular, konu gruplarına ayrılmış halde. */
export default function Faq() {
  const { lang, t } = useI18n();
  const s = t.pages.faq;

  return (
    <>
      <PageHero eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />
      <Container className="max-w-4xl space-y-14 py-14 sm:py-20">
        {t.faq.groups.map((g, i) => (
          <section key={g.title} aria-labelledby={`sss-grup-${i}`}>
            <h2
              id={`sss-grup-${i}`}
              className="mb-5 flex items-center gap-3 font-mono text-sm tracking-[0.2em] text-accent uppercase"
            >
              <span aria-hidden className="h-px w-8 bg-accent/60" />
              {g.title}
            </h2>
            <FaqList items={g.items} />
          </section>
        ))}

        <Card className="flex flex-col items-start justify-between gap-6 border-accent/40 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold text-fg">{s.ask.title}</h2>
            <p className="mt-1 text-muted">{s.ask.body}</p>
          </div>
          <ButtonLink href={pathFor("contact", lang)}>
            {s.ask.cta} <ArrowRightIcon />
          </ButtonLink>
        </Card>
      </Container>
    </>
  );
}

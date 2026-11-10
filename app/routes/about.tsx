import type { Route } from "./+types/about";
import { CtaBand } from "~/components/home/CtaBand";
import { RoadmapSection } from "~/components/home/RoadmapSection";
import { Section } from "~/components/home/Section";
import { ValuesSection } from "~/components/home/ValuesSection";
import { PageHero } from "~/components/PageHero";
import { Card } from "~/components/ui/Card";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { getDictionary, getLang, useI18n } from "~/i18n";
import { pageMeta } from "~/lib/meta";

export function meta({ location }: Route.MetaArgs) {
  const lang = getLang(location.pathname);
  const { meta } = getDictionary(lang).pages.about;
  return pageMeta({ page: "about", lang, ...meta });
}

/** Hakkımızda: hikâye, temel bilgiler, değerler ve yol haritası. */
export default function About() {
  const { t } = useI18n();
  const s = t.pages.about;

  return (
    <>
      <PageHero eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />

      <Section labelledBy="hikaye-baslik">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div>
            <SectionHeader id="hikaye-baslik" eyebrow={s.story.eyebrow} index="01" title={s.story.title} />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
              {s.story.paragraphs.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </div>
          <dl className="grid content-start gap-4">
            {s.facts.map((f) => (
              <Card key={f.label}>
                <dt className="font-mono text-xs tracking-[0.2em] text-accent uppercase">{f.label}</dt>
                <dd className="mt-2 text-lg font-medium text-fg">{f.value}</dd>
              </Card>
            ))}
          </dl>
        </div>
      </Section>

      <ValuesSection index="02" id="degerler" subtitle={s.valuesSubtitle} />
      <RoadmapSection index="03" />
      <CtaBand />
    </>
  );
}

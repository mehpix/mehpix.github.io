import type { ReactNode } from "react";

import type { Route } from "./+types/design";
import { ArrowRightIcon } from "~/components/icons";
import { ProjectCard } from "~/components/ProjectCard";
import { Badge } from "~/components/ui/Badge";
import { Button, ButtonLink } from "~/components/ui/Button";
import { Card } from "~/components/ui/Card";
import { Container } from "~/components/ui/Container";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { getDictionary, getLang, useI18n } from "~/i18n";
import { pathFor } from "~/lib/paths";

// Bu sayfa geliştirme amaçlı bir vitrindir; arama motorlarında listelenmez.
export function meta({ location }: Route.MetaArgs) {
  const { design } = getDictionary(getLang(location.pathname));
  return [
    { title: design.meta.title },
    { name: "description", content: design.meta.description },
    { name: "robots", content: "noindex, nofollow" },
  ];
}

// Paletteki renkler: CSS değişken adı ve Tailwind sınıfı.
const SWATCHES = [
  { token: "--bg", className: "bg-bg" },
  { token: "--surface", className: "bg-surface" },
  { token: "--surface-2", className: "bg-surface-2" },
  { token: "--line", className: "bg-line" },
  { token: "--fg", className: "bg-fg" },
  { token: "--muted", className: "bg-muted" },
  { token: "--accent", className: "bg-accent" },
  { token: "--accent-strong", className: "bg-accent-strong" },
  { token: "--success", className: "bg-success" },
  { token: "--warning", className: "bg-warning" },
] as const;

export default function Design() {
  const { lang, t } = useI18n();
  const d = t.design;
  const c = d.components;

  return (
    <>
      {/* Giriş */}
      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="bg-grid absolute inset-0" />
        <div
          aria-hidden
          className="absolute top-0 left-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow/10 blur-3xl"
        />
        <Container className="relative py-20 sm:py-28">
          <SectionHeader as="h1" eyebrow={d.eyebrow} index="00" title={d.title} subtitle={d.subtitle} />
          <p className="mt-8 max-w-2xl rounded-xl border border-warning/40 bg-warning/10 px-4 py-3 text-sm text-warning">
            {d.note}
          </p>
        </Container>
      </section>

      <Container className="space-y-24 py-20">
        {/* Renkler */}
        <section aria-labelledby="renkler">
          <SectionHeader id="renkler" eyebrow={d.colors.eyebrow} index="01" title={d.colors.title} subtitle={d.colors.subtitle} />
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {SWATCHES.map((s) => (
              <li key={s.token} className="overflow-hidden rounded-xl border border-line bg-surface">
                <div className={`h-20 ${s.className}`} />
                <p className="px-3 py-2 font-mono text-xs text-muted">{s.token}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Tipografi */}
        <section aria-labelledby="tipografi">
          <SectionHeader id="tipografi" eyebrow={d.type.eyebrow} index="02" title={d.type.title} />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Card>
              <Label>{d.type.display}</Label>
              <p className="mt-4 font-display text-4xl font-bold text-fg">{d.type.sample}</p>
              <p className="mt-2 font-display text-2xl font-medium text-accent neon-text">MehPiX</p>
            </Card>
            <Card>
              <Label>{d.type.body}</Label>
              <p className="mt-4 text-base text-fg">{d.type.paragraph}</p>
              <p className="mt-2 text-sm text-muted">{d.type.paragraph}</p>
            </Card>
            <Card>
              <Label>{d.type.mono}</Label>
              <p className="mt-4 font-mono text-sm tracking-[0.25em] text-accent uppercase">
                Yazılım · İnovasyon · 2026
              </p>
              <p className="mt-2 font-mono text-sm text-muted">const future = await mehpix.build();</p>
            </Card>
          </div>
        </section>

        {/* Bileşenler */}
        <section aria-labelledby="bilesenler" className="space-y-14">
          <SectionHeader id="bilesenler" eyebrow={d.eyebrow} index="03" title={c.eyebrow} />

          <Demo title={c.buttons}>
            <div className="flex flex-wrap items-center gap-3">
              <ButtonLink href={pathFor("projects", lang)} size="lg">
                {c.primary} <ArrowRightIcon />
              </ButtonLink>
              <ButtonLink href={pathFor("about", lang)} variant="outline" size="lg">
                {c.outline}
              </ButtonLink>
              <Button variant="ghost" size="lg">
                {c.ghost}
              </Button>
              <ButtonLink href="https://microcore.lovable.app/" variant="outline">
                {c.external}
              </ButtonLink>
              <Button size="sm">{c.primary}</Button>
              <Button size="sm" disabled>
                {c.soon}
              </Button>
            </div>
          </Demo>

          <Demo title={c.badges}>
            <div className="flex flex-wrap items-center gap-3">
              <Badge tone="success" dot>
                {c.live}
              </Badge>
              <Badge tone="warning" dot>
                {c.soon}
              </Badge>
              <Badge tone="accent">{c.partner}</Badge>
              <Badge lang="en">{t.projects.pyai.tag}</Badge>
              <Badge lang="en">{t.projects.quiz.tag}</Badge>
            </div>
          </Demo>

          <Demo title={c.cards}>
            <div className="grid gap-6 md:grid-cols-2">
              <ProjectCard
                image="/images/mpx-logo.jpg"
                title={t.projects.pyai.title}
                tags={[t.projects.pyai.tag, "Python"]}
                body={t.projects.pyai.body}
                status={<Badge tone="warning" dot>{c.soon}</Badge>}
                cta={c.details}
              />
              <ProjectCard
                image="/images/quiz-logo.jpg"
                title={t.projects.quiz.title}
                tags={[t.projects.quiz.tag, "C++"]}
                body={t.projects.quiz.body}
                status={<Badge tone="warning" dot>{c.soon}</Badge>}
                cta={c.details}
              />
            </div>
          </Demo>

          <Demo title={c.sections}>
            <Card className="py-10">
              <SectionHeader
                eyebrow={c.sampleEyebrow}
                index="01"
                title={c.sampleTitle}
                subtitle={c.sampleSubtitle}
                align="center"
              />
            </Card>
          </Demo>
        </section>
      </Container>
    </>
  );
}

function Label({ children }: { children: ReactNode }) {
  return <p className="font-mono text-xs tracking-wider text-muted uppercase">{children}</p>;
}

function Demo({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="mb-5 font-mono text-sm tracking-[0.2em] text-muted uppercase">{title}</h3>
      {children}
    </div>
  );
}

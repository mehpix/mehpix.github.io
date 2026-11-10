import type { ReactNode } from "react";
import { Link } from "react-router";

import { PROJECTS, type ProjectKey } from "~/data/projects";
import { useI18n } from "~/i18n";
import { pathFor } from "~/lib/paths";

import { ArrowLeftIcon, DownloadIcon } from "../icons";
import { ProjectStatusBadge } from "../ProjectList";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Container } from "../ui/Container";

/** Projenin sabit bilgilerini (görsel, durum, teknoloji) anahtarıyla bulur. */
export function getProject(key: ProjectKey) {
  return PROJECTS.find((p) => p.key === key)!;
}

/**
 * Proje sayfasının üst kısmı: "Tüm projeler" bağlantısı, başlık, durum,
 * etiketler, kısa açıklama, indirme butonu ve proje görseli.
 * İndirmeler Faz 5'te bağlanacak; o zamana kadar buton pasif durur.
 */
export function ProjectHero({ projectKey }: { projectKey: ProjectKey }) {
  const { lang, t } = useI18n();
  const project = getProject(projectKey);
  const copy = t.projects[projectKey];
  const p = t.pages.project;

  return (
    <section className="relative overflow-hidden border-b border-line">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/3 size-[40rem] rounded-full bg-glow/10 blur-3xl"
      />
      <Container className="relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1fr_1fr]">
        <div>
          <Link
            to={pathFor("projects", lang)}
            className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-muted uppercase transition-colors hover:text-accent"
          >
            <ArrowLeftIcon /> {p.back}
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <h1 className="text-5xl font-bold sm:text-6xl">{copy.title}</h1>
            <ProjectStatusBadge status={project.status} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {[copy.tag, ...project.tech].map((tag) => (
              <Badge key={tag} lang="en">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="mt-6 max-w-xl text-lg text-muted">{copy.body}</p>
          <div className="mt-8">
            <Button size="lg" disabled>
              <DownloadIcon /> {p.downloadSoon}
            </Button>
          </div>
        </div>
        <img
          src={project.image}
          alt=""
          width={1600}
          height={900}
          className="w-full rounded-2xl border border-line object-cover neon-box aspect-[16/9]"
        />
      </Container>
    </section>
  );
}

/** Başlıklı içerik bloğu (proje sayfalarındaki her bölüm). */
export function DetailBlock({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="text-2xl font-bold text-fg sm:text-3xl">
        {title}
      </h2>
      {subtitle && <p className="mt-2 max-w-2xl text-muted">{subtitle}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}

/** Özellik kartları. */
export function FeatureGrid({ items }: { items: readonly { title: string; body: string }[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((f) => (
        <li key={f.title}>
          <Card className="h-full">
            <h3 className="flex items-center gap-2 text-lg font-bold text-fg">
              <span aria-hidden className="size-2 rounded-full bg-accent neon-box" />
              {f.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
          </Card>
        </li>
      ))}
    </ul>
  );
}

/** Kısa bilgi listesi (platform, dil, durum...). Yan sütunda durur. */
export function FactList({ title, items }: { title: string; items: readonly { label: string; value: ReactNode }[] }) {
  return (
    <Card className="lg:sticky lg:top-24">
      <h2 className="font-mono text-xs tracking-[0.2em] text-muted uppercase">{title}</h2>
      <dl className="mt-4 divide-y divide-line">
        {items.map((f) => (
          <div key={f.label} className="flex items-baseline justify-between gap-4 py-3">
            <dt className="text-sm text-muted">{f.label}</dt>
            <dd className="text-right text-sm font-medium text-fg">{f.value}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}

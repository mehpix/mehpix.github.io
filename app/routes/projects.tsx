import { useState } from "react";

import type { Route } from "./+types/projects";
import { PageHero } from "~/components/PageHero";
import { ProjectList } from "~/components/ProjectList";
import { Container } from "~/components/ui/Container";
import { CATEGORIES, PROJECTS, type ProjectCategory } from "~/data/projects";
import { getDictionary, getLang, useI18n } from "~/i18n";
import { pageMeta } from "~/lib/meta";

export function meta({ location }: Route.MetaArgs) {
  const lang = getLang(location.pathname);
  const { meta } = getDictionary(lang).pages.projects;
  return pageMeta({ page: "projects", lang, ...meta });
}

type Filter = "all" | ProjectCategory;

/** Tüm projeler; kategoriye göre (Uygulama / Donanım) filtrelenebilir. */
export default function Projects() {
  const { t } = useI18n();
  const s = t.pages.projects;
  const [filter, setFilter] = useState<Filter>("all");

  const visible = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  const filters: Filter[] = ["all", ...CATEGORIES];

  return (
    <>
      <PageHero eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />
      <Container className="py-14 sm:py-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Filtre düğmeleri: seçili olan aria-pressed ile belirtilir */}
          <div role="group" aria-label={s.filterLabel} className="flex flex-wrap gap-2">
            {filters.map((f) => {
              const active = filter === f;
              const count = f === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.category === f).length;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f)}
                  className={`inline-flex h-9 items-center gap-2 rounded-full border px-4 text-sm transition-colors ${
                    active
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-line text-muted hover:border-accent/50 hover:text-fg"
                  }`}
                >
                  {s.filters[f]}
                  <span className="font-mono text-xs opacity-70">{count}</span>
                </button>
              );
            })}
          </div>
          {/* Ekran okuyucular filtre değişince sonuç sayısını duyurur */}
          <p aria-live="polite" className="font-mono text-xs tracking-wider text-muted uppercase">
            {s.count.replace("{n}", String(visible.length))}
          </p>
        </div>
        <div className="mt-8">
          <ProjectList projects={visible} />
        </div>
      </Container>
    </>
  );
}

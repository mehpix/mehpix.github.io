import type { Route } from "./+types/project-quiz";
import { ArrowUpRightIcon } from "~/components/icons";
import {
  DetailBlock,
  FactList,
  FeatureGrid,
  ProjectHero,
} from "~/components/project/ProjectDetail";
import { ProjectStatusBadge } from "~/components/ProjectList";
import { Container } from "~/components/ui/Container";
import { getDictionary, getLang, useI18n } from "~/i18n";
import { pageMeta } from "~/lib/meta";

export function meta({ location }: Route.MetaArgs) {
  const lang = getLang(location.pathname);
  const { meta } = getDictionary(lang).pages.quiz;
  return pageMeta({ page: "projectQuiz", lang, ...meta });
}

/** Quiz (Arduino) proje sayfası: oynanış, parça listesi ve bağlantı tablosu. */
export default function ProjectQuiz() {
  const { t } = useI18n();
  const s = t.pages.quiz;
  const p = t.pages.project;

  return (
    <>
      <ProjectHero projectKey="quiz" />
      <Container className="grid gap-12 py-14 sm:py-20 lg:grid-cols-[1fr_20rem]">
        <div className="min-w-0 space-y-14">
          <p className="max-w-2xl text-lg leading-relaxed text-fg/90">{s.intro}</p>

          <DetailBlock id="ozellikler" title={p.features}>
            <FeatureGrid items={s.features} />
          </DetailBlock>

          <DetailBlock id="nasil-oynanir" title={s.howTo.title}>
            <ol className="space-y-4">
              {s.howTo.steps.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span
                    aria-hidden
                    className="flex size-8 shrink-0 items-center justify-center rounded-full border border-accent/50 font-mono text-sm text-accent"
                  >
                    {i + 1}
                  </span>
                  <p className="pt-1 text-muted">{step}</p>
                </li>
              ))}
            </ol>
          </DetailBlock>

          <DetailBlock id="parcalar" title={s.parts.title}>
            <ul className="grid gap-2 sm:grid-cols-2">
              {s.parts.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-sm text-fg"
                >
                  <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">{s.parts.library}</p>
          </DetailBlock>

          <DetailBlock id="baglanti-tablosu" title={s.wiring.title} subtitle={s.wiring.subtitle}>
            <WiringTable />
            <a
              href="/images/quiz-baglanti-tablosu.png"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm text-accent transition-colors hover:text-accent-strong"
            >
              {s.wiring.image} <ArrowUpRightIcon />
            </a>
          </DetailBlock>
        </div>

        <aside>
          <FactList
            title={p.facts}
            items={[
              { label: p.platform, value: s.platform },
              { label: p.language, value: "C++ (Arduino)" },
              { label: s.library, value: "LiquidCrystal_I2C" },
              { label: p.status, value: <ProjectStatusBadge status="soon" /> },
            ]}
          />
        </aside>
      </Container>
    </>
  );
}

/**
 * Bağlantı tablosu. Her bileşenin satırları gruplanır; bileşen adı hücresi
 * grubun tüm satırlarını kaplar (rowSpan). Dar ekranlarda tablo kendi
 * içinde yatay kayar, sayfa taşmaz.
 */
function WiringTable() {
  const { t } = useI18n();
  const w = t.pages.quiz.wiring;

  return (
    <div className="overflow-x-auto rounded-2xl border border-line">
      <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
        <thead className="bg-surface-2">
          <tr>
            {[w.headers.component, w.headers.pin, w.headers.arduino, w.headers.note].map((h) => (
              <th
                key={h}
                scope="col"
                className="px-4 py-3 text-xs font-semibold text-muted"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        {w.groups.map((g) => (
          <tbody key={g.component} className="border-t border-line">
            {g.rows.map((r, i) => (
              <tr key={`${g.component}-${r.pin}`} className={i > 0 ? "border-t border-line/50" : ""}>
                {i === 0 && (
                  <th
                    scope="rowgroup"
                    rowSpan={g.rows.length}
                    className="bg-surface px-4 py-3 align-top font-semibold text-fg"
                  >
                    {g.component}
                  </th>
                )}
                <td className="px-4 py-3 text-muted">{r.pin}</td>
                <td className="px-4 py-3 font-mono text-accent">{r.arduino}</td>
                <td className="px-4 py-3 text-muted">{r.note}</td>
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  );
}

import type { Route } from "./+types/project-pyai";
import {
  DetailBlock,
  FactList,
  FeatureGrid,
  getProject,
  Notice,
  ProjectHero,
  VerifyDownload,
} from "~/components/project/ProjectDetail";
import { ProjectStatusBadge } from "~/components/ProjectList";
import { Container } from "~/components/ui/Container";
import { getDictionary, getLang, useI18n } from "~/i18n";
import { pageMeta } from "~/lib/meta";

export function meta({ location }: Route.MetaArgs) {
  const lang = getLang(location.pathname);
  const { meta } = getDictionary(lang).pages.pyai;
  return pageMeta({ page: "projectPyai", lang, ...meta });
}

/** PyAI proje sayfası. */
export default function ProjectPyai() {
  const { t } = useI18n();
  const s = t.pages.pyai;
  const p = t.pages.project;
  const project = getProject("pyai");

  return (
    <>
      <ProjectHero projectKey="pyai" />
      <Container className="grid grid-cols-1 gap-12 py-14 sm:py-20 lg:grid-cols-[1fr_20rem]">
        <div className="min-w-0 space-y-14">
          <p className="max-w-2xl text-lg leading-relaxed text-fg/90">{s.intro}</p>
          <Notice title={s.smartscreen.title}>{s.smartscreen.body}</Notice>
          <DetailBlock id="ozellikler" title={p.features}>
            <FeatureGrid items={s.features} />
          </DetailBlock>
          <VerifyDownload projectKey="pyai" />
        </div>
        <aside>
          <FactList
            title={p.facts}
            items={[
              { label: p.platform, value: s.platform },
              { label: s.file, value: s.fileValue },
              { label: p.version, value: project.download.version },
              { label: p.language, value: "Python" },
              { label: p.license, value: project.license ?? p.allRights },
              { label: p.status, value: <ProjectStatusBadge status={project.status} /> },
            ]}
          />
        </aside>
      </Container>
    </>
  );
}

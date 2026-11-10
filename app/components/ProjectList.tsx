import { PROJECTS, type ProjectStatus } from "~/data/projects";
import { useI18n } from "~/i18n";
import { pathFor } from "~/lib/paths";

import { ProjectCard } from "./ProjectCard";
import { Badge, type BadgeTone } from "./ui/Badge";

type Project = (typeof PROJECTS)[number];

// Proje durumunun rozet rengi
const STATUS_TONE: Record<ProjectStatus, BadgeTone> = { live: "success", soon: "warning" };

/** Proje durumunu gösteren rozet ("Yayında" / "Yakında"). */
export function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
  const { t } = useI18n();
  return (
    <Badge tone={STATUS_TONE[status]} dot>
      {t.status[status]}
    </Badge>
  );
}

/** Proje kartları ızgarası; her kart projenin detay sayfasına gider. */
export function ProjectList({ projects = PROJECTS }: { projects?: readonly Project[] }) {
  const { lang, t } = useI18n();
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {projects.map((p) => {
        const copy = t.projects[p.key];
        return (
          <li key={p.key}>
            <ProjectCard
              image={p.image}
              title={copy.title}
              tags={[copy.tag, ...p.tech]}
              body={copy.body}
              status={<ProjectStatusBadge status={p.status} />}
              href={pathFor(p.page, lang)}
              cta={t.pages.projects.details}
            />
          </li>
        );
      })}
    </ul>
  );
}

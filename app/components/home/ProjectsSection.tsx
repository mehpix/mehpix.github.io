import { PROJECTS, type ProjectStatus } from "~/data/projects";
import { useI18n } from "~/i18n";
import { HOME_SECTIONS } from "~/lib/paths";

import { ProjectCard } from "../ProjectCard";
import { Badge, type BadgeTone } from "../ui/Badge";
import { SectionHeader } from "../ui/SectionHeader";
import { Section } from "./Section";

// Proje durumunun rozet rengi
const STATUS_TONE: Record<ProjectStatus, BadgeTone> = { live: "success", soon: "warning" };

/** "Portföyümüz / 01": PyAI ve Quiz kartları. */
export function ProjectsSection() {
  const { t } = useI18n();
  const s = t.home.projects;

  return (
    <Section id={HOME_SECTIONS.projects} labelledBy="projeler-baslik">
      <SectionHeader
        id="projeler-baslik"
        eyebrow={s.eyebrow}
        index="01"
        title={s.title}
        subtitle={s.subtitle}
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p) => {
          const copy = t.projects[p.key];
          return (
            <ProjectCard
              key={p.key}
              image={p.image}
              title={copy.title}
              tags={[copy.tag, ...p.tech]}
              body={copy.body}
              status={
                <Badge tone={STATUS_TONE[p.status]} dot>
                  {t.status[p.status]}
                </Badge>
              }
            />
          );
        })}
      </div>
    </Section>
  );
}

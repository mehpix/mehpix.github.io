import { useI18n } from "~/i18n";
import { HOME_SECTIONS } from "~/lib/paths";

import { ProjectList } from "../ProjectList";
import { SectionHeader } from "../ui/SectionHeader";
import { Section } from "./Section";

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
      <div className="mt-12">
        <ProjectList />
      </div>
    </Section>
  );
}

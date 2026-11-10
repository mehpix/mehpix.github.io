import { PROJECTS } from "~/data/projects";
import { useI18n } from "~/i18n";

import { CountUp } from "../ui/CountUp";
import { SectionHeader } from "../ui/SectionHeader";
import { Section } from "./Section";

// Gerçek rakamlar (sözlükteki etiketlerle aynı sırada).
// Proje sayısı proje listesinden otomatik hesaplanır.
const VALUES = [
  PROJECTS.length, // Proje: PyAI ve Quiz
  2, // Programlama dili: Python ve C++
  1, // İş birliği: MicroCore
  2026, // Kuruluş yılı
];

/** Ekrana girince sayan rakamlar. */
export function StatsSection() {
  const { t } = useI18n();
  const s = t.home.stats;

  return (
    <Section labelledBy="rakamlar-baslik" className="border-y border-line bg-surface/40">
      <SectionHeader id="rakamlar-baslik" eyebrow={s.eyebrow} index="03" title={s.title} />
      <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
        {s.items.map((item, i) => (
          <div key={item.label} className="flex flex-col bg-bg p-6 sm:p-8">
            <dt className="order-2 mt-3 font-medium text-fg">{item.label}</dt>
            <dd className="order-1 font-display text-5xl font-bold text-accent neon-text sm:text-6xl">
              <CountUp value={VALUES[i] ?? 0} />
            </dd>
            <dd className="order-3 mt-1 text-sm text-muted">{item.note}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

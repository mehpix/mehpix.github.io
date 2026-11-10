import { useI18n } from "~/i18n";
import { HOME_SECTIONS } from "~/lib/paths";

import { BoltIcon, CodeIcon, CompassIcon, LockIcon } from "../icons";
import { Card } from "../ui/Card";
import { SectionHeader } from "../ui/SectionHeader";
import { Section } from "./Section";

// Sözlükteki değerlerle aynı sırada: Gizlilik, Sadelik, Merak, Paylaşım
const ICONS = [LockIcon, BoltIcon, CompassIcon, CodeIcon];

/** "Neden MehPiX? / 02": kısa tanıtım ve dört değer kartı. */
export function ValuesSection() {
  const { t } = useI18n();
  const s = t.home.values;

  return (
    <Section id={HOME_SECTIONS.about} labelledBy="hakkimizda-baslik">
      <SectionHeader
        id="hakkimizda-baslik"
        eyebrow={s.eyebrow}
        index="02"
        title={s.title}
        subtitle={s.subtitle}
      />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {s.items.map((item, i) => {
          const Icon = ICONS[i % ICONS.length]!;
          return (
            <li key={item.title}>
              <Card interactive className="h-full">
                <span className="inline-flex size-12 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-2xl text-accent">
                  <Icon />
                </span>
                <h3 className="mt-6 text-xl font-bold text-fg">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </Card>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

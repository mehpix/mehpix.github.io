import { useI18n } from "~/i18n";

import { Badge, type BadgeTone } from "../ui/Badge";
import { SectionHeader } from "../ui/SectionHeader";
import { Section } from "./Section";

type Status = "done" | "progress" | "planned";

// Her durumun rozet rengi ve zaman çizelgesindeki nokta görünümü
const STYLES: Record<Status, { tone: BadgeTone; dot: string }> = {
  done: { tone: "success", dot: "bg-accent neon-box" },
  progress: { tone: "warning", dot: "bg-warning animate-pulse motion-reduce:animate-none" },
  planned: { tone: "neutral", dot: "border border-muted bg-bg" },
};

function toStatus(value: string): Status {
  return value === "done" || value === "progress" ? value : "planned";
}

/** "Yol Haritası / 04": dikey zaman çizelgesi. */
export function RoadmapSection() {
  const { t } = useI18n();
  const s = t.home.roadmap;

  return (
    <Section labelledBy="yol-haritasi-baslik">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            id="yol-haritasi-baslik"
            eyebrow={s.eyebrow}
            index="04"
            title={s.title}
            subtitle={s.subtitle}
          />
        </div>

        <ol className="relative ml-1.5 space-y-10 border-l border-line pl-8">
          {s.items.map((item) => {
            const status = toStatus(item.status);
            const style = STYLES[status];
            return (
              <li key={`${item.date}-${item.title}`} className="relative">
                {/* Çizgi üzerindeki nokta */}
                <span
                  aria-hidden
                  className={`absolute top-1.5 -left-[calc(2rem+0.375rem+0.5px)] size-3 rounded-full ${style.dot}`}
                />
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-mono text-sm text-accent">{item.date}</p>
                  <Badge tone={style.tone}>{t.status[status]}</Badge>
                </div>
                <h3 className="mt-2 text-xl font-bold text-fg">{item.title}</h3>
                <p className="mt-1.5 text-muted">{item.body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}

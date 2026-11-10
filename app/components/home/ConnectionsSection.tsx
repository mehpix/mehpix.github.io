import type { ReactNode } from "react";

import { useI18n } from "~/i18n";
import { LINKS } from "~/lib/site";

import { ArrowUpRightIcon } from "../icons";
import { Badge } from "../ui/Badge";
import { SectionHeader } from "../ui/SectionHeader";
import { Section } from "./Section";

/** "Bağlantılar / 05": iş birlikleri ve ekibin kişisel siteleri. */
export function ConnectionsSection() {
  const { t } = useI18n();
  const s = t.home.connections;

  return (
    <Section labelledBy="baglantilar-baslik">
      <SectionHeader
        id="baglantilar-baslik"
        eyebrow={s.eyebrow}
        index="05"
        title={s.title}
        subtitle={s.subtitle}
      />
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <Group title={s.partners}>
          <LinkCard
            href={LINKS.microcore}
            logo="/images/microcore-logo.png"
            name="MicroCore"
            body={s.microcore}
            badge={<Badge tone="accent">{s.partner}</Badge>}
          />
        </Group>
        <Group title={s.personal}>
          <LinkCard
            href={LINKS.mehbur07}
            logo="/images/mehbur-logo.webp"
            name="mehbur07-site"
            body={s.mehbur}
            badge={
              <Badge tone="success" dot>
                {t.status.live}
              </Badge>
            }
          />
        </Group>
      </div>
    </Section>
  );
}

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="mb-4 font-mono text-xs tracking-[0.2em] text-muted uppercase">{title}</h3>
      {children}
    </div>
  );
}

/** Başka bir siteye giden kart; yeni sekmede açılır. */
function LinkCard({
  href,
  logo,
  name,
  body,
  badge,
}: {
  href: string;
  logo: string;
  name: string;
  body: string;
  badge: ReactNode;
}) {
  const host = new URL(href).host;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-5 rounded-2xl border border-line bg-surface p-5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:neon-box"
    >
      <img
        src={logo}
        alt=""
        loading="lazy"
        width={80}
        height={80}
        className="size-20 shrink-0 rounded-xl border border-line bg-black object-contain"
      />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-display text-xl font-bold text-fg">{name}</p>
          {badge}
        </div>
        <p className="mt-1 text-sm text-muted">{body}</p>
        <p className="mt-2 inline-flex items-center gap-1 font-mono text-xs text-accent">
          {host}
          <ArrowUpRightIcon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </p>
      </div>
    </a>
  );
}

import { Link } from "react-router";

import { useI18n } from "~/i18n";
import { pathFor, type PageKey } from "~/lib/paths";
import { LINKS } from "~/lib/site";

import { ArrowUpIcon, ArrowUpRightIcon } from "../icons";
import { Container } from "../ui/Container";
import { LiveClock } from "./LiveClock";
import { Wordmark } from "./Wordmark";

const SITE_LINKS = ["projects", "about", "faq", "contact"] as const satisfies readonly PageKey[];

// Dış bağlantılar (yeni sekmede açılır).
const EXTERNAL_LINKS = [
  { label: "MicroCore", href: LINKS.microcore },
  { label: "Mehbur07", href: LINKS.mehbur07 },
  { label: "GitHub", href: LINKS.github },
] as const;

/** Sayfa altı: logo, kısa tanıtım, canlı saat, bağlantı sütunları ve telif satırı. */
export function Footer() {
  const { lang, t } = useI18n();

  return (
    <footer className="relative mt-24 border-t border-line bg-surface/50">
      {/* Üst kenardaki ince neon çizgi */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-glow/70 to-transparent"
      />
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <Wordmark />
          <p className="max-w-xs text-sm text-muted">{t.footer.tagline}</p>
          <LiveClock label={t.footer.time} />
        </div>

        <FooterColumn title={t.footer.site}>
          {SITE_LINKS.map((page) => (
            <li key={page}>
              <Link to={pathFor(page, lang)} className="text-muted transition-colors hover:text-accent">
                {t.nav[page]}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title={t.footer.projects}>
          <li>
            <Link to={pathFor("projectPyai", lang)} className="text-muted transition-colors hover:text-accent">
              {t.projects.pyai.title}
            </Link>
          </li>
          <li>
            <Link to={pathFor("projectQuiz", lang)} className="text-muted transition-colors hover:text-accent">
              {t.projects.quiz.title}
            </Link>
          </li>
        </FooterColumn>

        <FooterColumn title={t.footer.links}>
          {EXTERNAL_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted transition-colors hover:text-accent"
              >
                {l.label}
                <ArrowUpRightIcon className="text-xs" />
              </a>
            </li>
          ))}
        </FooterColumn>
      </Container>

      <Container className="flex flex-col items-start justify-between gap-4 border-t border-line py-6 text-xs text-muted sm:flex-row sm:items-center">
        <p>
          © 2026 MehPiX. {t.footer.rights}
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-accent">
          <ArrowUpIcon />
          {t.footer.top}
        </a>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-mono text-xs tracking-[0.2em] text-fg uppercase">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

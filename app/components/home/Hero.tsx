import { useI18n } from "~/i18n";
import { HOME_SECTIONS, linkFor } from "~/lib/paths";

import { ArrowDownIcon, ArrowRightIcon } from "../icons";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";

/** Ana sayfanın en üstündeki karşılama bölümü. */
export function Hero() {
  const { lang, t } = useI18n();
  const h = t.home.hero;

  return (
    <section aria-labelledby="hero-baslik" className="relative overflow-hidden border-b border-line">
      {/* Arka plan: ızgara dokusu ve neon parıltı */}
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 size-[44rem] -translate-x-1/2 rounded-full bg-glow/10 blur-3xl"
      />

      <Container className="relative grid items-center gap-14 pt-16 pb-24 sm:pt-24 lg:grid-cols-[1.1fr_1fr] lg:pt-28 lg:pb-32">
        <div>
          <p className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-accent uppercase">
            <span aria-hidden className="size-2 rounded-full bg-accent neon-box" />
            {h.eyebrow}
          </p>
          <h1
            id="hero-baslik"
            className="mt-6 text-5xl leading-[1.02] font-bold sm:text-7xl lg:text-[5.25rem]"
          >
            <span className="block">{h.title}</span>
            <span className="block">{h.titleLine}</span>
            <span className="block text-accent neon-text">{h.titleAccent}</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg text-muted">{h.body}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={linkFor("projects", lang)} size="lg">
              {h.primary} <ArrowRightIcon />
            </ButtonLink>
            <ButtonLink href={linkFor("about", lang)} variant="outline" size="lg">
              {h.secondary}
            </ButtonLink>
          </div>
        </div>

        {/* Logo: arkasında yumuşak neon hale */}
        <div className="relative">
          <div aria-hidden className="absolute -inset-6 rounded-[2rem] bg-glow/15 blur-3xl" />
          <img
            src="/images/mpx-logo.jpg"
            alt={h.logoAlt}
            width={2816}
            height={1536}
            fetchPriority="high"
            className="relative w-full rounded-2xl border border-line neon-box"
          />
        </div>
      </Container>

      {/* Aşağı kaydır işareti (yalnızca geniş ekranlarda) */}
      <a
        href={`#${HOME_SECTIONS.projects}`}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[0.7rem] tracking-[0.25em] text-muted uppercase transition-colors hover:text-accent lg:flex"
      >
        {h.scroll}
        <ArrowDownIcon className="animate-bounce text-base motion-reduce:animate-none" />
      </a>
    </section>
  );
}

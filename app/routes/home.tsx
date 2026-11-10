import type { Route } from "./+types/home";
import { LangSwitch } from "~/components/layout/LangSwitch";
import { ThemeToggle } from "~/components/layout/ThemeToggle";
import { getDictionary, getLang, useI18n } from "~/i18n";

// Sayfa başlığı ve açıklaması (sekme adı, arama motoru ve paylaşım önizlemesi).
export function meta({ location }: Route.MetaArgs) {
  const lang = getLang(location.pathname);
  const { meta } = getDictionary(lang);
  return [
    { title: meta.title },
    { name: "description", content: meta.description },
    { property: "og:title", content: meta.title },
    { property: "og:description", content: meta.description },
    { property: "og:locale", content: lang === "en" ? "en_US" : "tr_TR" },
    { tagName: "link", rel: "alternate", hrefLang: "tr", href: "https://mehpix.github.io/" },
    { tagName: "link", rel: "alternate", hrefLang: "en", href: "https://mehpix.github.io/en" },
  ];
}

// Geçici "yapım aşamasında" sayfası. Asıl ana sayfa Faz 3'te gelecek.
export default function Home() {
  const { t } = useI18n();
  const c = t.construction;

  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-4 py-16 text-center">
      {/* Arka plan: ızgara dokusu ve hafif neon parıltı */}
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow/10 blur-3xl"
      />

      {/* Sağ üst: dil ve tema düğmeleri */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <LangSwitch />
        <ThemeToggle />
      </div>

      <img
        src="/images/mpx-logo.jpg"
        alt="MehPiX logosu"
        width={2816}
        height={1536}
        className="relative w-full max-w-md rounded-2xl border border-line"
      />

      <p className="relative mt-10 font-mono text-xs tracking-[0.3em] text-accent uppercase">
        {c.eyebrow}
      </p>
      <h1 className="relative mt-4 max-w-2xl text-3xl font-bold sm:text-5xl">{c.title}</h1>
      <p className="relative mt-5 max-w-xl text-base text-muted sm:text-lg">{c.body}</p>
    </main>
  );
}

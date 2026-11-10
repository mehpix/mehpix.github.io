import type { Route } from "./+types/home";
import { ConnectionsSection } from "~/components/home/ConnectionsSection";
import { CtaBand } from "~/components/home/CtaBand";
import { FaqSection } from "~/components/home/FaqSection";
import { Hero } from "~/components/home/Hero";
import { ProjectsSection } from "~/components/home/ProjectsSection";
import { RoadmapSection } from "~/components/home/RoadmapSection";
import { StatsSection } from "~/components/home/StatsSection";
import { ValuesSection } from "~/components/home/ValuesSection";
import { Marquee } from "~/components/ui/Marquee";
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

// Ana sayfa: MicroCore düzenindeki bölümler sırasıyla dizilir.
export default function Home() {
  const { t } = useI18n();
  return (
    <>
      <Hero />
      <Marquee items={t.home.marquee.first} />
      <ProjectsSection />
      <ValuesSection />
      <StatsSection />
      <RoadmapSection />
      <Marquee items={t.home.marquee.second} reverse />
      <ConnectionsSection />
      <FaqSection />
      <CtaBand />
    </>
  );
}

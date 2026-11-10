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
import { pageMeta } from "~/lib/meta";

// Sayfa başlığı ve açıklaması (sekme adı, arama motoru ve paylaşım önizlemesi).
export function meta({ location }: Route.MetaArgs) {
  const lang = getLang(location.pathname);
  const { meta } = getDictionary(lang);
  return pageMeta({ page: "home", lang, ...meta });
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

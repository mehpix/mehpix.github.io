import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

import { PAGES, type PageKey } from "./lib/paths";

/**
 * Bir sayfayı hem Türkçe hem İngilizce adresiyle tanımlar.
 * Aynı bileşen dosyası kullanılır; dil, adresten otomatik belirlenir.
 */
function localized(page: PageKey, file: string) {
  return (["tr", "en"] as const).map((lang) =>
    route(PAGES[page][lang].slice(1), file, { id: `${page}-${lang}` }),
  );
}

export default [
  // Menü + footer ile sarılan sayfalar
  layout("routes/_site.tsx", [
    index("routes/home.tsx", { id: "home-tr" }),
    route("en", "routes/home.tsx", { id: "home-en" }),
    ...localized("projects", "routes/projects.tsx"),
    ...localized("projectPyai", "routes/project-pyai.tsx"),
    ...localized("projectQuiz", "routes/project-quiz.tsx"),
    ...localized("about", "routes/about.tsx"),
    ...localized("contact", "routes/contact.tsx"),
    ...localized("faq", "routes/faq.tsx"),
    ...localized("design", "routes/design.tsx"),
  ]),
] satisfies RouteConfig;

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
  // Faz 1–3 arası geçici "yapım aşamasında" ana sayfası (menü/footer olmadan)
  index("routes/home.tsx", { id: "home-tr" }),
  route("en", "routes/home.tsx", { id: "home-en" }),

  // Menü + footer ile sarılan sayfalar
  layout("routes/_site.tsx", [...localized("design", "routes/design.tsx")]),
] satisfies RouteConfig;

import type { Lang } from "~/i18n";

// Sitedeki tüm sayfaların Türkçe ve İngilizce adresleri tek yerde tutulur.
// Menü, footer ve dil değiştirme düğmesi adresleri buradan okur; böylece bir
// sayfanın adresi değişirse tek bir yerden güncellenir.
export const PAGES = {
  home: { tr: "/", en: "/en" },
  projects: { tr: "/projeler", en: "/en/projects" },
  about: { tr: "/hakkimizda", en: "/en/about" },
  contact: { tr: "/iletisim", en: "/en/contact" },
  faq: { tr: "/sss", en: "/en/faq" },
  design: { tr: "/tasarim", en: "/en/design" },
} as const satisfies Record<string, Record<Lang, string>>;

export type PageKey = keyof typeof PAGES;

/** Bir sayfanın verilen dildeki adresini döndürür. */
export function pathFor(page: PageKey, lang: Lang): string {
  return PAGES[page][lang];
}

/** Sondaki "/" işaretini atar ("/en/" → "/en"); kök "/" olduğu gibi kalır. */
function normalize(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
}

/** Adresi verilen sayfa ile eşleşiyor mu? (Menüde aktif bağlantıyı işaretlemek için) */
export function isActive(page: PageKey, pathname: string): boolean {
  const current = normalize(pathname);
  return Object.values(PAGES[page]).some((p) => p === current);
}

/**
 * Şu anki sayfanın diğer dildeki karşılığını bulur.
 * Eşleşme yoksa (örn. 404) hedef dilin ana sayfasına döner.
 */
export function translatePath(pathname: string, target: Lang): string {
  const current = normalize(pathname);
  for (const page of Object.values(PAGES)) {
    if (page.tr === current || page.en === current) return page[target];
  }
  return PAGES.home[target];
}

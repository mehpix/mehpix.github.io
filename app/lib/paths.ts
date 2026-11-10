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

// Yayında olan sayfalar. Henüz yapılmamış bir sayfaya verilen bağlantılar
// 404'e gitmek yerine ana sayfadaki ilgili bölüme yönlenir (aşağıdaki
// HOME_SECTIONS). Faz 4'te sayfalar eklendikçe buraya yazılır.
const READY_PAGES: ReadonlySet<PageKey> = new Set(["home", "design"]);

/** Ana sayfadaki bölümlerin id'leri (her iki dilde aynı). */
export const HOME_SECTIONS = {
  projects: "projeler",
  about: "hakkimizda",
  faq: "sss",
  contact: "iletisim",
} as const satisfies Partial<Record<PageKey, string>>;

/**
 * Menü ve butonlarda kullanılacak bağlantı adresi.
 * Sayfa hazırsa kendi adresini, değilse ana sayfadaki karşılık gelen
 * bölümü ("/#projeler", "/en#projeler") döndürür.
 */
export function linkFor(page: PageKey, lang: Lang): string {
  if (READY_PAGES.has(page)) return pathFor(page, lang);
  const section = (HOME_SECTIONS as Partial<Record<PageKey, string>>)[page];
  return section ? `${pathFor("home", lang)}#${section}` : pathFor("home", lang);
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

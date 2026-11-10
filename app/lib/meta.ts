import type { Lang } from "~/i18n";

import { PAGES, SITE_URL, type PageKey } from "./paths";

/**
 * Bir sayfanın <head> bilgilerini üretir: sekme başlığı, açıklama,
 * paylaşım önizlemesi (Open Graph) ve "bu sayfanın diğer dildeki hali"
 * bağlantıları (hreflang). Arama motorları TR ve EN sayfaları böylece eşleştirir.
 */
export function pageMeta({
  page,
  lang,
  title,
  description,
  noindex = false,
}: {
  page: PageKey;
  lang: Lang;
  title: string;
  description: string;
  noindex?: boolean;
}) {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: SITE_URL + PAGES[page][lang] },
    { property: "og:locale", content: lang === "en" ? "en_US" : "tr_TR" },
    { tagName: "link", rel: "alternate", hrefLang: "tr", href: SITE_URL + PAGES[page].tr },
    { tagName: "link", rel: "alternate", hrefLang: "en", href: SITE_URL + PAGES[page].en },
    ...(noindex ? [{ name: "robots", content: "noindex, nofollow" }] : []),
  ];
}

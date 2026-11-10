import type { Lang } from "~/i18n";

import { PAGES, SITE_URL, type PageKey } from "./paths";

/**
 * Bir sayfanın tam adresi. GitHub Pages klasör adreslerini "/" ile bitirir
 * ("/projeler" → "/projeler/" yönlendirmesi), bu yüzden arama motorlarına
 * yönlendirmesiz son adres verilir.
 */
export function absoluteUrl(path: string): string {
  return SITE_URL + (path === "/" ? "/" : `${path}/`);
}

/** Paylaşım önizlemelerinde (WhatsApp, X, LinkedIn...) görünen görsel. */
const OG_IMAGE = { url: `${SITE_URL}/og-image.jpg`, width: "1200", height: "630" };

/**
 * Bir sayfanın <head> bilgilerini üretir: sekme başlığı, açıklama, asıl adres
 * (canonical), paylaşım önizlemesi (Open Graph + X kartı) ve "bu sayfanın
 * diğer dildeki hali" bağlantıları (hreflang). Arama motorları TR ve EN
 * sayfaları böylece eşleştirir.
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
  const url = absoluteUrl(PAGES[page][lang]);
  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: url },
    { tagName: "link", rel: "alternate", hrefLang: "tr", href: absoluteUrl(PAGES[page].tr) },
    { tagName: "link", rel: "alternate", hrefLang: "en", href: absoluteUrl(PAGES[page].en) },
    { tagName: "link", rel: "alternate", hrefLang: "x-default", href: absoluteUrl(PAGES[page].tr) },
    { property: "og:site_name", content: "MehPiX" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:locale", content: lang === "en" ? "en_US" : "tr_TR" },
    { property: "og:locale:alternate", content: lang === "en" ? "tr_TR" : "en_US" },
    { property: "og:image", content: OG_IMAGE.url },
    { property: "og:image:width", content: OG_IMAGE.width },
    { property: "og:image:height", content: OG_IMAGE.height },
    { property: "og:image:alt", content: "MehPiX" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: OG_IMAGE.url },
    ...(noindex ? [{ name: "robots", content: "noindex, nofollow" }] : []),
  ];
}

// Derleme sonrası adımlar ("pnpm build" sonunda otomatik çalışır):
// 1) sitemap.xml: arama motorlarına sitedeki tüm sayfaları ve her sayfanın
//    diğer dildeki karşılığını bildirir.
// 2) 404.html: GitHub Pages bilinmeyen adreslerde bu dosyayı gösterir; React
//    Router'ın yedek sayfası kopyalanır, böylece 404 ekranını uygulama çizer.
//
// Node 24, TypeScript dosyalarını doğrudan çalıştırabildiği için ek araç gerekmez.
import { copyFileSync, writeFileSync } from "node:fs";

import { PAGES, SITE_URL, type PageKey } from "../app/lib/paths.ts";

const OUT = "build/client";

// Arama motorlarına kapalı sayfalar haritaya girmez.
const EXCLUDED: readonly PageKey[] = ["design"];

/** GitHub Pages'in kullandığı, "/" ile biten son adres. */
const url = (path: string) => SITE_URL + (path === "/" ? "/" : `${path}/`);

const today = new Date().toISOString().slice(0, 10);
const pages = (Object.keys(PAGES) as PageKey[]).filter((p) => !EXCLUDED.includes(p));

const entries = pages.flatMap((page) =>
  (["tr", "en"] as const).map((lang) => {
    const alternates = [
      `    <xhtml:link rel="alternate" hreflang="tr" href="${url(PAGES[page].tr)}"/>`,
      `    <xhtml:link rel="alternate" hreflang="en" href="${url(PAGES[page].en)}"/>`,
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${url(PAGES[page].tr)}"/>`,
    ].join("\n");
    return `  <url>\n    <loc>${url(PAGES[page][lang])}</loc>\n    <lastmod>${today}</lastmod>\n${alternates}\n  </url>`;
  }),
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`;

writeFileSync(`${OUT}/sitemap.xml`, sitemap);
copyFileSync(`${OUT}/__spa-fallback.html`, `${OUT}/404.html`);

console.log(`sitemap.xml: ${entries.length} adres · 404.html hazır`);

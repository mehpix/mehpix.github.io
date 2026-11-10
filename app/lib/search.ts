import { PROJECTS } from "~/data/projects";
import type { Dictionary, Lang } from "~/i18n";

import { pathFor, type PageKey } from "./paths";

// Site içi arama: tüm içerik tarayıcıda, o anki dilin sözlüğünden üretilir.
// Sunucu veya dış servis gerekmez.

export type SearchGroup = "pages" | "projects" | "faq";
export const SEARCH_GROUPS: readonly SearchGroup[] = ["pages", "projects", "faq"];

export type SearchItem = {
  id: string;
  group: SearchGroup;
  title: string;
  text: string;
  href: string;
  /** Aramada eşleşmeye katılan ama ekranda gösterilmeyen ek kelimeler */
  keywords?: string;
};

/**
 * Karşılaştırma için metni sadeleştirir: küçük harf (Türkçe kurala göre),
 * aksan ve Türkçe harflerden arındırma. Böylece "baglanti" yazan da
 * "Bağlantı"yı, "sss" yazan da "SSS"yi bulur.
 */
export function normalize(value: string): string {
  return value
    .toLocaleLowerCase("tr")
    .replace(/ı/g, "i")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

/** SSS sorusundan sabit bir sayfa içi id üretir (örn. "sss-mehpix-nedir"). */
export function faqId(question: string): string {
  const slug = normalize(question)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `sss-${slug}`;
}

// Aranabilir sayfalar (menüdeki sırayla)
const PAGE_KEYS = [
  "home",
  "projects",
  "projectPyai",
  "projectQuiz",
  "about",
  "contact",
  "faq",
] as const satisfies readonly PageKey[];

/** Verilen dil için arama indeksini oluşturur. */
export function buildSearchIndex(t: Dictionary, lang: Lang): SearchItem[] {
  const s = t.search;

  const pages: SearchItem[] = PAGE_KEYS.map((page) => ({
    id: `sayfa-${page}`,
    group: "pages",
    title: s.pages[page].title,
    text: s.pages[page].text,
    keywords: s.pages[page].keywords,
    href: pathFor(page, lang),
  }));

  const projects: SearchItem[] = PROJECTS.map((p) => {
    const copy = t.projects[p.key];
    return {
      id: `proje-${p.key}`,
      group: "projects",
      title: copy.title,
      text: copy.body,
      keywords: [copy.tag, ...p.tech, p.download.file].join(" "),
      href: pathFor(p.page, lang),
    };
  });

  const faq: SearchItem[] = t.faq.groups.flatMap((g) =>
    g.items.map((item) => ({
      id: faqId(item.q),
      group: "faq" as const,
      title: item.q,
      text: item.a,
      keywords: g.title,
      href: `${pathFor("faq", lang)}#${faqId(item.q)}`,
    })),
  );

  return [...pages, ...projects, ...faq];
}

/**
 * Sorguya uyan içerikleri döndürür. Sorudaki her kelime başlıkta, metinde
 * veya anahtar kelimelerde geçmelidir. Başlıkta geçenler (özellikle başlığın
 * başında) daha üstte listelenir. Sonuçlar gruplara göre sıralıdır.
 */
export function searchItems(items: readonly SearchItem[], query: string, limit = 12): SearchItem[] {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  const scored = items.flatMap((item) => {
    const title = normalize(item.title);
    const all = `${title} ${normalize(item.text)} ${normalize(item.keywords ?? "")}`;
    let score = 0;
    for (const term of terms) {
      if (!all.includes(term)) return [];
      if (title.startsWith(term)) score += 10;
      else if (title.includes(term)) score += 6;
      else score += 1;
    }
    return [{ item, score }];
  });

  // Önce en iyi eşleşmeler seçilir, sonra ekranda gruplara göre dizilir.
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .sort(
      (a, b) =>
        SEARCH_GROUPS.indexOf(a.item.group) - SEARCH_GROUPS.indexOf(b.item.group) ||
        b.score - a.score,
    )
    .map((r) => r.item);
}

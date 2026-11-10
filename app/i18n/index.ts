import { useLocation } from "react-router";
import { en } from "./en";
import { tr } from "./tr";

// Sitenin desteklediği diller. Türkçe varsayılandır ve adreste ön ek almaz;
// İngilizce sayfalar "/en" ile başlar (örn. "/hakkimizda" ↔ "/en/about").
export const LANGS = ["tr", "en"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "tr";

// Sözlük tipi Türkçe metinlerden türetilir; metin değerleri "string" olarak
// genişletilir ki İngilizce sözlük aynı yapıya farklı metinlerle uyabilsin.
// Listeler (örn. kayan yazı kelimeleri, SSS) iki dilde farklı uzunlukta olabilir.
type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : { [K in keyof T]: Widen<T[K]> };
export type Dictionary = Widen<typeof tr>;

const dictionaries: Record<Lang, Dictionary> = { tr, en };

/** Adres yolundan (pathname) dili bulur. */
export function getLang(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "tr";
}

/** Verilen dilin metin sözlüğünü döndürür. */
export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** Bileşenler içinde o anki dili ve metinleri almak için kullanılır. */
export function useI18n() {
  const { pathname } = useLocation();
  const lang = getLang(pathname);
  return { lang, t: getDictionary(lang) };
}

import { Link, useLocation } from "react-router";

import { LANGS, useI18n } from "~/i18n";
import { translatePath } from "~/lib/paths";

const NAMES = { tr: "Türkçe", en: "English" } as const;

/** TR | EN seçici. Aynı sayfanın diğer dildeki karşılığına götürür. */
export function LangSwitch() {
  const { pathname } = useLocation();
  const { lang, t } = useI18n();

  return (
    <nav aria-label={t.lang.label}>
      <ul className="flex items-center rounded-full border border-line p-0.5 font-mono text-xs">
        {LANGS.map((l) => {
          const active = l === lang;
          return (
            <li key={l}>
              <Link
                to={translatePath(pathname, l)}
                hrefLang={l}
                lang={l}
                aria-label={NAMES[l]}
                aria-current={active ? "true" : undefined}
                className={`block rounded-full px-2.5 py-1 uppercase transition-colors ${
                  active ? "bg-accent text-accent-ink" : "text-muted hover:text-fg"
                }`}
              >
                {l}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

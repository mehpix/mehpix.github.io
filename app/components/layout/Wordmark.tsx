import { Link } from "react-router";

import { useI18n } from "~/i18n";
import { pathFor } from "~/lib/paths";

/**
 * Menü ve footer'daki yazı logosu. Büyük logo görseli (2 MB) küçük boyutta
 * net görünmediği için logodaki "MPX" neon yazısı CSS ile yeniden çizilir.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  const { lang, t } = useI18n();
  return (
    <Link
      to={pathFor("home", lang)}
      aria-label={t.nav.home}
      className={`group inline-flex items-baseline gap-2 rounded-md ${className}`}
    >
      <span className="font-display text-2xl font-bold italic tracking-tight text-accent neon-text">
        MPX
      </span>
      <span className="font-display text-sm font-semibold text-fg/80 transition-colors group-hover:text-fg">
        MehPiX
      </span>
    </Link>
  );
}

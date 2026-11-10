import { useI18n } from "~/i18n";
import { useTheme } from "~/lib/theme";

import { MoonIcon, SunIcon } from "../icons";

/** Koyu ve açık tema arasında geçiş yapan düğme. Seçim tarayıcıda hatırlanır. */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useI18n();
  const isDark = theme === "dark";
  const label = isDark ? t.theme.toLight : t.theme.toDark;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
      className="inline-flex size-9 items-center justify-center rounded-full text-lg text-muted transition-colors hover:bg-surface-2 hover:text-accent"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

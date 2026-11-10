import { useCallback, useSyncExternalStore } from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "mpx-theme";
const THEME_COLORS: Record<Theme, string> = { dark: "#04090d", light: "#f5fafb" };

/**
 * Sayfa çizilmeden ÖNCE <head> içinde çalışan küçük betik.
 * Kullanıcı daha önce açık temayı seçtiyse onu hemen uygular; böylece sayfa
 * önce koyu açılıp sonra açığa "zıplamaz". Kayıt yoksa koyu tema (varsayılan) kalır.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${STORAGE_KEY}");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t;var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",t==="light"?"${THEME_COLORS.light}":"${THEME_COLORS.dark}")}}catch(e){}})();`;

function readTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

// <html data-theme> değiştiğinde aboneleri haberdar eder.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

/** O anki temayı okur ve değiştirmeye yarayan fonksiyonu verir. */
export function useTheme() {
  // Sunucuda (derleme sırasında) tarayıcı olmadığı için varsayılan "dark" kullanılır.
  const theme = useSyncExternalStore(subscribe, readTheme, () => "dark" as const);

  const setTheme = useCallback((next: Theme) => {
    document.documentElement.dataset.theme = next;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", THEME_COLORS[next]);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Gizli sekme vb. durumlarda kayıt yapılamayabilir; tema yine de değişir.
    }
  }, []);

  return { theme, setTheme };
}

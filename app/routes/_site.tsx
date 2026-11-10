import { Outlet } from "react-router";

import { Footer } from "~/components/layout/Footer";
import { Navbar } from "~/components/layout/Navbar";
import { CodeNetwork } from "~/components/ui/CodeNetwork";
import { useI18n } from "~/i18n";

/**
 * Site düzeni: menü + sayfa içeriği + footer.
 * routes.ts içinde bu düzenin altına eklenen her sayfa otomatik olarak sarılır.
 */
export default function SiteLayout() {
  const { t } = useI18n();
  return (
    <div id="top" className="flex min-h-dvh flex-col">
      {/* Klavye kullanıcıları menüyü atlayıp doğrudan içeriğe geçebilir */}
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        {t.a11y.skip}
      </a>
      {/* Arka planda dolaşan, birbirine çizgilerle bağlanan neon </> ağı (yalnızca süs) */}
      <CodeNetwork />
      <Navbar />
      <main id="icerik" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { getLang, useI18n } from "./i18n";
import { pathFor } from "./lib/paths";
import { themeInitScript } from "./lib/theme";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { ButtonLink } from "./components/ui/Button";

// Tüm sayfaları saran HTML iskeleti. <html lang> değeri adrese göre
// "tr" veya "en" olur; ekran okuyucular ve arama motorları için önemlidir.
// data-theme varsayılan olarak "dark"tır; kullanıcı açık temayı seçtiyse
// <head> içindeki küçük betik bunu sayfa çizilmeden önce değiştirir.
// suppressHydrationWarning: bu betiğin yaptığı değişikliği React'in
// "uyuşmazlık" olarak raporlamasını engeller.
// Sekme ikonu (favicon) ve telefon ana ekranı ikonu tüm sayfalarda geçerlidir.
// "?v=" eki: tarayıcılar ikonları uzun süre ayrı bir önbellekte tutar. İkon
// değiştiğinde bu sayıyı artırın; tarayıcı yeni adresi görüp ikonu yeniden indirir.
const ICON_VERSION = 2;
export const links: Route.LinksFunction = () => [
  { rel: "icon", href: `/favicon.ico?v=${ICON_VERSION}`, sizes: "32x32" },
  { rel: "apple-touch-icon", href: `/apple-touch-icon.png?v=${ICON_VERSION}` },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  return (
    <html lang={getLang(pathname)} data-theme="dark" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#04090d" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

// 404 ekranında önerilen sayfalar
const SUGGESTED = ["projects", "about", "faq", "contact"] as const;

// Bulunamayan sayfalar (404) ve beklenmeyen hatalar burada gösterilir.
// Ziyaretçi kaybolmasın diye menü ve footer da gösterilir.
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const { lang, t } = useI18n();
  const is404 = isRouteErrorResponse(error) && error.status === 404;
  const copy = is404 ? t.notFound : t.error;

  return (
    <div id="top" className="flex min-h-dvh flex-col">
      <title>{`${copy.title} — MehPiX`}</title>
      <meta name="robots" content="noindex" />
      <Navbar />
      <main id="icerik" className="relative flex flex-1 items-center overflow-hidden">
        <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto flex max-w-xl flex-col items-center gap-4 px-4 py-24 text-center">
          <p className="font-mono text-7xl font-bold text-accent neon-text">{is404 ? "404" : "ERROR"}</p>
          <h1 className="text-3xl font-bold">{copy.title}</h1>
          <p className="text-muted">{copy.body}</p>
          <ButtonLink href={pathFor("home", lang)} className="mt-2">
            {t.notFound.home}
          </ButtonLink>
          {is404 && (
            <nav aria-label={t.notFound.links} className="mt-6">
              <p className="text-sm text-muted">{t.notFound.links}</p>
              <ul className="mt-3 flex flex-wrap justify-center gap-2">
                {SUGGESTED.map((page) => (
                  <li key={page}>
                    <ButtonLink href={pathFor(page, lang)} variant="outline" size="sm">
                      {t.nav[page]}
                    </ButtonLink>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

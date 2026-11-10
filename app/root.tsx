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
import { ButtonLink } from "./components/ui/Button";

// Tüm sayfaları saran HTML iskeleti. <html lang> değeri adrese göre
// "tr" veya "en" olur; ekran okuyucular ve arama motorları için önemlidir.
// data-theme varsayılan olarak "dark"tır; kullanıcı açık temayı seçtiyse
// <head> içindeki küçük betik bunu sayfa çizilmeden önce değiştirir.
// suppressHydrationWarning: bu betiğin yaptığı değişikliği React'in
// "uyuşmazlık" olarak raporlamasını engeller.
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

// Bulunamayan sayfalar (404) ve beklenmeyen hatalar burada gösterilir.
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const { lang, t } = useI18n();
  const is404 = isRouteErrorResponse(error) && error.status === 404;
  const copy = is404 ? t.notFound : t.error;

  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col items-center justify-center gap-4 px-4 text-center">
      <title>{`${copy.title} — MehPiX`}</title>
      <p className="font-mono text-6xl font-bold text-accent neon-text">
        {is404 ? "404" : "ERROR"}
      </p>
      <h1 className="text-3xl font-bold">{copy.title}</h1>
      <p className="text-muted">{copy.body}</p>
      <ButtonLink href={pathFor("home", lang)} variant="outline" className="mt-2">
        {t.notFound.home}
      </ButtonLink>
    </main>
  );
}

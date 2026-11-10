import {
  isRouteErrorResponse,
  Link,
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

// Tüm sayfaları saran HTML iskeleti. <html lang> değeri adrese göre
// "tr" veya "en" olur; ekran okuyucular ve arama motorları için önemlidir.
export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  return (
    <html lang={getLang(pathname)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#05080d" />
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
      <p className="font-mono text-sm tracking-widest text-neon">
        {is404 ? "404" : "ERROR"}
      </p>
      <h1 className="text-3xl font-bold">{copy.title}</h1>
      <p className="text-slate-400">{copy.body}</p>
      <Link
        to={lang === "en" ? "/en" : "/"}
        className="mt-2 rounded-full border border-neon/40 px-5 py-2 text-sm text-neon transition hover:bg-neon/10"
      >
        {t.notFound.home}
      </Link>
    </main>
  );
}

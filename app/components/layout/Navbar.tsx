import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

import { useI18n } from "~/i18n";
import { isActive, linkFor, type PageKey } from "~/lib/paths";

import { CloseIcon, MenuIcon } from "../icons";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";
import { LangSwitch } from "./LangSwitch";
import { ThemeToggle } from "./ThemeToggle";
import { Wordmark } from "./Wordmark";

// Menüde gösterilecek sayfalar (sırasıyla).
const NAV_ITEMS = ["projects", "about", "faq", "contact"] as const satisfies readonly PageKey[];

/** Sayfanın üstüne yapışık menü. Mobilde açılır/kapanır panele dönüşür. */
export function Navbar() {
  const { lang, t } = useI18n();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  // Menü açıkken Esc tuşu menüyü kapatır.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = NAV_ITEMS.map((page) => ({
    page,
    href: linkFor(page, lang),
    label: t.nav[page],
    active: isActive(page, pathname),
  }));

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/75 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Wordmark />

        {/* Masaüstü menü */}
        <nav aria-label={t.nav.label} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.page}>
                <Link
                  to={l.href}
                  aria-current={l.active ? "page" : undefined}
                  className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                    l.active ? "text-accent" : "text-muted hover:text-fg"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LangSwitch />
          </div>
          <ThemeToggle />
          {/* Butonun kendi "inline-flex" sınıfı "hidden"ı ezmesin diye ayrı kapsayıcıda gizlenir */}
          <div className="hidden md:block">
            <ButtonLink href={linkFor("contact", lang)} size="sm">
              {t.nav.cta}
            </ButtonLink>
          </div>

          {/* Mobil menü düğmesi */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobil-menu"
            aria-label={open ? t.nav.close : t.nav.open}
            className="inline-flex size-9 items-center justify-center rounded-full text-xl text-fg hover:bg-surface-2 md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      {/* Mobil menü paneli */}
      <div
        id="mobil-menu"
        hidden={!open}
        className="border-t border-line bg-bg md:hidden"
      >
        <Container className="py-4">
          <nav aria-label={t.nav.label}>
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.page}>
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={l.active ? "page" : undefined}
                    className={`block rounded-xl px-3 py-3 text-base transition-colors ${
                      l.active ? "bg-surface-2 text-accent" : "text-fg hover:bg-surface-2"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-4">
            <LangSwitch />
            <ButtonLink href={linkFor("contact", lang)} size="sm" onClick={() => setOpen(false)}>
              {t.nav.cta}
            </ButtonLink>
          </div>
        </Container>
      </div>
    </header>
  );
}

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type KeyboardEvent,
} from "react";
import { useNavigate } from "react-router";

import { useI18n } from "~/i18n";
import { buildSearchIndex, SEARCH_GROUPS, searchItems, type SearchItem } from "~/lib/search";

import { ArrowRightIcon, SearchIcon } from "../icons";

// Mac'te kısayol ⌘K, diğer sistemlerde Ctrl K olarak gösterilir.
// Sunucuda (prerender) bilinemediği için önce "Ctrl K" yazılır, tarayıcıda düzeltilir.
const noop = () => () => {};
function useIsMac() {
  return useSyncExternalStore(
    noop,
    () => /Mac|iPhone|iPad/i.test(navigator.platform || navigator.userAgent),
    () => false,
  );
}

/**
 * Site içi arama: menüdeki "Ara" butonu ve ⌘K / Ctrl+K ile açılan pencere.
 * Tarayıcının kendi <dialog> öğesi kullanılır: Esc ile kapanır, açıkken
 * klavye odağı pencerenin içinde kalır ve arkadaki sayfa etkileşimsiz olur.
 */
export function Search() {
  const { lang, t } = useI18n();
  const s = t.search;
  const navigate = useNavigate();
  const isMac = useIsMac();

  const dialogRef = useRef<HTMLDialogElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const index = useMemo(() => buildSearchIndex(t, lang), [t, lang]);
  const hasQuery = query.trim().length > 0;
  // Sorgu boşken önerilen sayfalar, doluyken eşleşen sonuçlar gösterilir.
  const results = useMemo(
    () => (hasQuery ? searchItems(index, query) : index.filter((i) => i.group === "pages")),
    [index, query, hasQuery],
  );

  function open() {
    setQuery("");
    setActive(0);
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  function go(item: SearchItem | undefined) {
    if (!item) return;
    close();
    navigate(item.href);
  }

  // ⌘K / Ctrl+K kısayolu her sayfada çalışır.
  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        const dialog = dialogRef.current;
        if (dialog?.open) dialog.close();
        else {
          setQuery("");
          setActive(0);
          dialog?.showModal();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Klavyeyle seçilen sonuç görünür alanda kalsın.
  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  function onInputKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (results.length ? (i + 1) % results.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (results.length ? (i - 1 + results.length) % results.length : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(results[active]);
    }
  }

  const activeId = results[active] ? `arama-${results[active].id}` : undefined;
  const shortcut = isMac ? "⌘K" : "Ctrl K";

  // Sonuçları gruplara ayır; klavye sırası için her sonucun genel sırası korunur.
  const grouped = SEARCH_GROUPS.map((group) => ({
    group,
    items: results.map((item, i) => ({ item, i })).filter(({ item }) => item.group === group),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label={s.label}
        aria-keyshortcuts="Control+K Meta+K"
        className="inline-flex size-9 items-center justify-center gap-2 rounded-full text-lg text-muted transition-colors hover:bg-surface-2 hover:text-fg lg:h-9 lg:w-auto lg:border lg:border-line lg:pr-2 lg:pl-3.5 lg:text-sm"
      >
        <SearchIcon />
        <span className="hidden lg:inline">{s.open}</span>
        <kbd className="hidden rounded-md border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[0.7rem] text-muted lg:inline">
          {shortcut}
        </kbd>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={s.label}
        onClick={(e) => e.target === e.currentTarget && close()}
        className="mx-auto mt-[10vh] w-[min(40rem,calc(100%-2rem))] max-w-none overflow-hidden rounded-2xl border border-line bg-surface p-0 text-fg shadow-2xl backdrop:bg-bg/70 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <SearchIcon aria-hidden className="shrink-0 text-lg text-accent" />
          <input
            type="search"
            role="combobox"
            aria-expanded={results.length > 0}
            aria-controls="arama-sonuclari"
            aria-activedescendant={activeId}
            aria-autocomplete="list"
            aria-label={s.label}
            placeholder={s.placeholder}
            autoComplete="off"
            spellCheck={false}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onInputKeyDown}
            className="h-14 w-full bg-transparent text-base text-fg placeholder:text-muted focus:outline-none focus-visible:outline-none [&::-webkit-search-cancel-button]:hidden"
          />
          <button
            type="button"
            onClick={close}
            className="shrink-0 rounded-md border border-line px-1.5 py-0.5 font-mono text-[0.7rem] text-muted hover:text-fg"
          >
            esc
          </button>
        </div>

        {/* Ekran okuyuculara sonuç sayısını duyurur */}
        <p aria-live="polite" className="sr-only">
          {hasQuery && s.results.replace("{n}", String(results.length))}
        </p>

        <div ref={listRef} id="arama-sonuclari" role="listbox" aria-label={s.label} className="max-h-[60vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <div className="px-4 py-10 text-center">
              <p className="text-fg">{s.empty.replace("{q}", query.trim())}</p>
              <p className="mt-1 text-sm text-muted">{s.emptyHint}</p>
            </div>
          ) : (
            grouped.map(({ group, items }) => (
              <div key={group} role="group" aria-labelledby={`arama-grup-${group}`} className="mb-1">
                <p
                  id={`arama-grup-${group}`}
                  role="presentation"
                  className="px-3 pt-3 pb-1.5 font-mono text-[0.7rem] tracking-[0.2em] text-muted uppercase"
                >
                  {hasQuery ? s.groups[group] : s.suggestions}
                </p>
                {items.map(({ item, i }) => {
                  const selected = i === active;
                  return (
                    <div
                      key={item.id}
                      id={`arama-${item.id}`}
                      data-index={i}
                      role="option"
                      aria-selected={selected}
                      onMouseMove={() => setActive(i)}
                      onClick={() => go(item)}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 ${
                        selected ? "bg-accent/10 text-accent" : "text-fg"
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-medium">{item.title}</p>
                        <p className="truncate text-sm text-muted">{item.text}</p>
                      </div>
                      <ArrowRightIcon
                        aria-hidden
                        className={`shrink-0 transition-opacity ${selected ? "opacity-100" : "opacity-0"}`}
                      />
                    </div>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Klavye ipuçları (dokunmatik ekranlarda gizli) */}
        <div className="hidden items-center gap-4 border-t border-line px-4 py-2.5 font-mono text-[0.7rem] text-muted sm:flex">
          <span>
            <Kbd>↑</Kbd> <Kbd>↓</Kbd> {s.hints.navigate}
          </span>
          <span>
            <Kbd>↵</Kbd> {s.hints.select}
          </span>
          <span>
            <Kbd>esc</Kbd> {s.hints.close}
          </span>
        </div>
      </dialog>
    </>
  );
}

function Kbd({ children }: { children: string }) {
  return <kbd className="rounded border border-line bg-surface-2 px-1 py-px">{children}</kbd>;
}

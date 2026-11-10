import { useEffect } from "react";
import { useLocation } from "react-router";

import { faqId } from "~/lib/search";

import { PlusIcon } from "./icons";

/**
 * Açılır-kapanır soru listesi.
 * Tarayıcının kendi <details> öğesi kullanılır; JavaScript gerektirmez,
 * klavye ve ekran okuyucularla doğal olarak çalışır.
 * Her sorunun sabit bir id'si vardır; adres o soruyu gösteriyorsa
 * (aramadan gelindiğinde olduğu gibi) soru açık hale getirilir.
 */
export function FaqList({
  items,
  openFirst = false,
}: {
  items: readonly { q: string; a: string }[];
  openFirst?: boolean;
}) {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (el instanceof HTMLDetailsElement) el.open = true;
  }, [hash]);

  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
      {items.map((item, i) => (
        <details
          key={item.q}
          id={faqId(item.q)}
          open={openFirst && i === 0}
          className="group scroll-mt-24"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left text-lg font-medium text-fg transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
            {item.q}
            <PlusIcon className="shrink-0 text-xl text-accent transition-transform duration-200 group-open:rotate-45" />
          </summary>
          <p className="-mt-1 px-6 pb-6 leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

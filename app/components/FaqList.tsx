import { PlusIcon } from "./icons";

/**
 * Açılır-kapanır soru listesi.
 * Tarayıcının kendi <details> öğesi kullanılır; JavaScript gerektirmez,
 * klavye ve ekran okuyucularla doğal olarak çalışır.
 */
export function FaqList({
  items,
  openFirst = false,
}: {
  items: readonly { q: string; a: string }[];
  openFirst?: boolean;
}) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
      {items.map((item, i) => (
        <details key={item.q} open={openFirst && i === 0} className="group">
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

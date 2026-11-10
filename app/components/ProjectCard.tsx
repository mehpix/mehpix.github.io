import type { ReactNode } from "react";
import { Link } from "react-router";

import { ArrowRightIcon } from "./icons";
import { Badge } from "./ui/Badge";
import { Card } from "./ui/Card";

/**
 * Proje kartı: görsel, başlık, durum rozeti, etiketler ve kısa açıklama.
 * href verilirse kartın tamamı tıklanabilir bir bağlantı olur
 * (proje detay sayfaları Faz 4'te eklenecek).
 */
export function ProjectCard({
  image,
  title,
  tags,
  body,
  status,
  href,
  cta,
}: {
  image: string;
  title: string;
  tags: readonly string[];
  body: string;
  status: ReactNode;
  href?: string;
  cta?: string;
}) {
  const content = (
    <Card interactive={Boolean(href)} className="flex h-full flex-col overflow-hidden p-0">
      <img
        src={image}
        alt=""
        loading="lazy"
        className="aspect-[16/9] w-full border-b border-line object-cover"
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-2xl font-bold text-fg">{title}</h3>
          {status}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            // Teknoloji ve ürün adları Türkçe büyük harf kuralından etkilenmesin
            <Badge key={tag} lang="en">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{body}</p>
        {cta && (
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
            {cta} <ArrowRightIcon />
          </span>
        )}
      </div>
    </Card>
  );

  return href ? (
    <Link to={href} className="block h-full rounded-2xl">
      {content}
    </Link>
  ) : (
    content
  );
}

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router";

import { ArrowUpRightIcon } from "../icons";

export type ButtonVariant = "primary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const VARIANTS: Record<ButtonVariant, string> = {
  // Ana eylem: dolu neon buton
  primary:
    "bg-accent text-accent-ink hover:bg-accent-strong neon-box",
  // İkincil eylem: çerçeveli
  outline:
    "border border-accent/50 text-accent hover:bg-accent/10 hover:border-accent",
  // Sessiz eylem: menü ve araç düğmeleri
  ghost: "text-fg hover:bg-surface-2",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

/** Buton sınıflarını üretir; Link veya <a> gibi başka öğelere de uygulanabilir. */
export function buttonClasses({
  variant = "primary",
  size = "md",
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return [
    "inline-flex select-none items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap",
    "transition-[background-color,border-color,color,box-shadow] duration-200",
    "disabled:pointer-events-none disabled:opacity-50",
    VARIANTS[variant],
    SIZES[size],
    className,
  ].join(" ");
}

type StyleProps = { variant?: ButtonVariant; size?: ButtonSize; className?: string };

/** Sayfa içinde bir işlem yapan düğme (form gönderme, menü açma vb.). */
export function Button({
  variant,
  size,
  className,
  type = "button",
  ...props
}: StyleProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={buttonClasses({ variant, size, className })} {...props} />
  );
}

/**
 * Buton görünümlü bağlantı.
 * - "/" ile başlayan adresler site içi gezinme için React Router Link'i kullanır
 * - "http" ile başlayanlar yeni sekmede açılır ve köşe ok ikonu gösterir
 * - Geri kalanlar (#bolum, mailto:, indirme dosyaları) normal <a> olur
 */
export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...props
}: StyleProps & { href: string; children: ReactNode } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "href" | "className" | "children"
  >) {
  const classes = buttonClasses({ variant, size, className });

  if (href.startsWith("/") && !props.download) {
    return (
      <Link to={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
      {external && <ArrowUpRightIcon className="text-[1.1em]" />}
    </a>
  );
}

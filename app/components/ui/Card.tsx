import type { HTMLAttributes } from "react";

/**
 * Proje, değer, iş birliği gibi içerikleri gruplayan kutu.
 * interactive=true olduğunda üzerine gelince neon çerçeve ile parlar.
 */
export function Card({
  interactive = false,
  className = "",
  ...props
}: { interactive?: boolean } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={[
        "relative rounded-2xl border border-line bg-surface p-6",
        interactive &&
          "transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:neon-box",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

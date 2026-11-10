import type { PageKey } from "~/lib/paths";

// Projelerin dile bağlı olmayan bilgileri (görsel, durum, kategori, teknoloji).
// Başlık ve açıklamalar i18n sözlüklerinde "projects.<key>" altında durur.
export type ProjectStatus = "live" | "soon";

/** Projeler sayfasındaki filtre kategorileri. */
export const CATEGORIES = ["app", "hardware"] as const;
export type ProjectCategory = (typeof CATEGORIES)[number];

export const PROJECTS = [
  {
    key: "pyai",
    page: "projectPyai",
    image: "/images/mpx-logo.jpg",
    status: "soon",
    category: "app",
    tech: ["Python"],
  },
  {
    key: "quiz",
    page: "projectQuiz",
    image: "/images/quiz-logo.jpg",
    status: "soon",
    category: "hardware",
    tech: ["C++"],
  },
] as const satisfies readonly {
  key: string;
  page: PageKey;
  image: string;
  status: ProjectStatus;
  category: ProjectCategory;
  tech: readonly string[];
}[];

export type ProjectKey = (typeof PROJECTS)[number]["key"];

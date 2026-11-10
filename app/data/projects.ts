// Projelerin dile bağlı olmayan bilgileri (görsel, durum, teknoloji).
// Başlık ve açıklamalar i18n sözlüklerinde "projects.<key>" altında durur.
export type ProjectStatus = "live" | "soon";

export const PROJECTS = [
  { key: "pyai", image: "/images/mpx-logo.jpg", status: "soon", tech: ["Python"] },
  { key: "quiz", image: "/images/quiz-logo.jpg", status: "soon", tech: ["C++"] },
] as const satisfies readonly {
  key: string;
  image: string;
  status: ProjectStatus;
  tech: readonly string[];
}[];

export type ProjectKey = (typeof PROJECTS)[number]["key"];

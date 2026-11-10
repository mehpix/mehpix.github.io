import type { PageKey } from "~/lib/paths";

// Projelerin dile bağlı olmayan bilgileri (görsel, durum, kategori, teknoloji,
// indirme). Başlık ve açıklamalar i18n sözlüklerinde "projects.<key>" altında durur.
export type ProjectStatus = "live" | "soon";

/** Projeler sayfasındaki filtre kategorileri. */
export const CATEGORIES = ["app", "hardware"] as const;
export type ProjectCategory = (typeof CATEGORIES)[number];

/**
 * İndirme bilgileri. Dosyalar her projenin kendi GitHub reposundaki
 * Releases sayfasında durur. "latest/download" adresi her zaman en yeni
 * sürüme gider; yeni sürüm yayınlanınca yalnızca version, size ve sha256
 * güncellenir.
 */
export type ProjectDownload = {
  url: string;
  file: string;
  size: string;
  version: string;
  sha256: string;
};

export const PROJECTS = [
  {
    key: "pyai",
    page: "projectPyai",
    image: "/images/pyai-logo.webp",
    status: "live",
    category: "app",
    tech: ["Python"],
    repo: "https://github.com/mehpix/PyAI",
    license: null,
    download: {
      url: "https://github.com/mehpix/PyAI/releases/latest/download/PyAI.exe",
      file: "PyAI.exe",
      size: "8.9 MB",
      version: "1.0.0",
      sha256: "cab49f07a7c1c52f7c002df6ac868a9bdd430805e8deef1d3ee0afcaca1cc57f",
    },
  },
  {
    key: "quiz",
    page: "projectQuiz",
    image: "/images/quiz-logo.webp",
    status: "live",
    category: "hardware",
    tech: ["C++"],
    repo: "https://github.com/mehpix/Quiz",
    license: "MIT",
    download: {
      url: "https://github.com/mehpix/Quiz/releases/latest/download/Quiz.zip",
      file: "Quiz.zip",
      size: "48 KB",
      version: "1.0.0",
      sha256: "55d16d2400b53939f037d9aa250cf3e15df818cbdcac4d29edef54983e62d31f",
    },
  },
] as const satisfies readonly {
  key: string;
  page: PageKey;
  image: string;
  status: ProjectStatus;
  category: ProjectCategory;
  tech: readonly string[];
  repo: string;
  /** null: tüm hakları saklı */
  license: string | null;
  download: ProjectDownload;
}[];

export type ProjectKey = (typeof PROJECTS)[number]["key"];

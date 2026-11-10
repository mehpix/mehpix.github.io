import type { Dictionary } from "./index";

// İngilizce metinler. Anahtarlar tr.ts ile birebir aynı olmak zorundadır.
export const en: Dictionary = {
  meta: {
    title: "MehPiX — Software Studio",
    description:
      "MehPiX is a software studio building software that could change the world. Our new website is coming soon.",
  },
  a11y: {
    skip: "Skip to content",
  },
  nav: {
    label: "Main menu",
    home: "MehPiX home",
    projects: "Projects",
    about: "About",
    faq: "FAQ",
    contact: "Contact",
    cta: "Get in Touch",
    open: "Open menu",
    close: "Close menu",
  },
  theme: {
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
  },
  lang: {
    label: "Language",
  },
  footer: {
    tagline: "We came together to build software that could change the world.",
    site: "Site",
    projects: "Projects",
    links: "Links",
    time: "Türkiye",
    rights: "All rights reserved.",
    top: "Back to top",
  },
  construction: {
    eyebrow: "Software · Innovation · 2026",
    title: "Our new website is under construction.",
    body: "We keep coding the future. Our projects, partnerships and much more will be here soon.",
  },
  projects: {
    pyai: {
      title: "PyAI",
      tag: "Chatbot",
      body: "MehPiX's first project. A chatbot that runs from a single file; your chats and what it learns stay only on your computer.",
    },
    quiz: {
      title: "Quiz",
      tag: "Arduino",
      body: "A quiz game powered by Arduino: questions appear on an LCD screen, answers are picked with three buttons and a buzzer plays the sound effects.",
    },
  },
  design: {
    meta: {
      title: "Design System — MehPiX",
      description: "Colors, typefaces and components used across the MehPiX website.",
    },
    eyebrow: "Design System",
    title: "The MehPiX design language",
    subtitle:
      "Colors, typefaces and components used on every page of the site. Use the button at the top right to switch between light and dark themes.",
    note: "This page is for development. The pages in the menu arrive in Phase 4; until then the links lead to the 404 page.",
    colors: {
      eyebrow: "Colors",
      title: "Color palette",
      subtitle:
        "Derived from the neon cyan in the logo. In the light theme the accent gets darker to stay readable.",
    },
    type: {
      eyebrow: "Typography",
      title: "Typefaces",
      display: "Headings · Space Grotesk",
      body: "Body · Inter",
      mono: "Labels · JetBrains Mono",
      sample: "We are coding the future.",
      paragraph:
        "Explore our journey from ideas to digital experiences. Turkish character test: çğıöşü ÇĞİÖŞÜ.",
    },
    components: {
      eyebrow: "Components",
      buttons: "Buttons",
      badges: "Badges",
      cards: "Cards",
      sections: "Section headers",
      primary: "Explore Projects",
      outline: "About Us",
      ghost: "Learn more",
      external: "MicroCore",
      live: "Live",
      soon: "Coming soon",
      partner: "Partner",
      details: "Details",
      sampleEyebrow: "Portfolio",
      sampleTitle: "Our Projects",
      sampleSubtitle: "What we are working on and what is already live.",
    },
  },
  notFound: {
    title: "Page not found",
    body: "The page you are looking for may have moved or never existed.",
    home: "Back to home",
  },
  error: {
    title: "Something went wrong",
    body: "An unexpected error occurred. Please refresh the page.",
  },
};

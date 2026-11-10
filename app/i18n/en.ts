import type { Dictionary } from "./index";

// İngilizce metinler. Anahtarlar tr.ts ile birebir aynı olmak zorundadır.
export const en: Dictionary = {
  meta: {
    title: "MehPiX — Software Studio",
    description:
      "MehPiX is a software studio building software that could change the world. Explore our projects PyAI and Quiz, our partnerships and our roadmap.",
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
  status: {
    live: "Live",
    soon: "Coming soon",
    done: "Done",
    progress: "In progress",
    planned: "Planned",
  },
  home: {
    hero: {
      eyebrow: "Software · Innovation · 2026",
      title: "MehPiX.",
      titleLine: "Coding the",
      titleAccent: "future.",
      body: "We came together to build software that could change the world. Explore our journey from ideas to digital experiences.",
      primary: "Explore Projects",
      secondary: "About Us",
      scroll: "Scroll down",
      logoAlt: "MehPiX logo",
    },
    marquee: {
      first: ["MEHPIX", "SOFTWARE", "INNOVATION", "BUILDING", "PYAI", "QUIZ", "2026"],
      second: ["PYTHON", "C++", "ARDUINO", "AI", "HARDWARE", "PRIVACY", "DESIGN", "TÜRKİYE"],
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Our Projects",
      subtitle: "What we are working on, and what you will soon be able to download.",
    },
    values: {
      eyebrow: "Why us?",
      title: "Our Values",
      subtitle:
        "Hi, we are MehPiX. Since 24 May 2026 we have been writing code for software that could change the world. We work by these four principles.",
      items: [
        {
          title: "Privacy",
          body: "Your data belongs to you. Your PyAI chats are stored on your own computer, not on a server.",
        },
        {
          title: "Simplicity",
          body: "We build tools that need no setup, open from a single file and make sense at first sight.",
        },
        {
          title: "Curiosity",
          body: "From AI to Arduino, from software to hardware: we learn and build by trying new things.",
        },
        {
          title: "Sharing",
          body: "We share Quiz's Arduino code and circuit diagram, so anyone can build their own quiz game.",
        },
      ],
    },
    stats: {
      eyebrow: "In numbers",
      title: "So far",
      items: [
        { label: "Projects", note: "PyAI and Quiz" },
        { label: "Programming languages", note: "Python and C++" },
        { label: "Partnership", note: "MicroCore" },
        { label: "Founded", note: "24 May" },
      ],
    },
    roadmap: {
      eyebrow: "Roadmap",
      title: "Where are we heading?",
      subtitle: "The steps we have taken since we started, and what comes next.",
      items: [
        {
          date: "24 May 2026",
          title: "MehPiX founded",
          body: "We wrote our first line of code, aiming to build software that could change the world.",
          status: "done",
        },
        {
          date: "2026",
          title: "PyAI",
          body: "Our first project: a chatbot that opens from a single file and keeps your chats on your own computer.",
          status: "done",
        },
        {
          date: "2026",
          title: "Quiz (Arduino)",
          body: "Our first project combining software and hardware: a quiz game with an LCD screen, buttons and sound.",
          status: "done",
        },
        {
          date: "November 2026",
          title: "New website",
          body: "Our new multi-page website, in two languages with light and dark themes.",
          status: "progress",
        },
        {
          date: "2026",
          title: "Downloads",
          body: "PyAI and Quiz will be downloadable from this site.",
          status: "planned",
        },
        {
          date: "2027",
          title: "New projects",
          body: "We will keep working on new projects in AI and hardware.",
          status: "planned",
        },
      ],
    },
    connections: {
      eyebrow: "Connections",
      title: "Partnerships and personal sites",
      subtitle: "The teams we work with and our team's live personal projects.",
      partners: "Partnerships",
      personal: "Personal sites",
      microcore: "Game, app and innovation studio.",
      mehbur: "A live personal site from our team.",
      partner: "Partner",
    },
    faq: {
      eyebrow: "Good to know",
      title: "Frequently asked questions",
      items: [
        {
          q: "What is MehPiX?",
          a: "MehPiX is a software studio founded on 24 May 2026. We aim to build software that could change the world, from desktop apps to Arduino projects.",
        },
        {
          q: "Where does PyAI store my chats?",
          a: "Your chats and what PyAI learns are stored only on your own computer, in a folder next to the program.",
        },
        {
          q: "How can I download the projects?",
          a: "Downloads are coming to this site very soon. PyAI will come as a single .exe file; Quiz's Arduino code and circuit diagram will be shared in a .zip file.",
        },
        {
          q: "How can I contact you?",
          a: "Send us an email with your project ideas, partnership offers or questions. You will find our address in the contact section at the bottom of this page.",
        },
      ],
    },
    cta: {
      eyebrow: "Let's get started",
      title: "Have an idea? Let's code it together.",
      body: "You can always write to us about project ideas, partnerships and questions.",
      mail: "Send an Email",
      projects: "Explore Projects",
    },
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
    note: "This page is for development and is not indexed by search engines. Until phase 4, menu links go to the matching section on the home page.",
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

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
  search: {
    open: "Search",
    label: "Search the site",
    placeholder: "Search pages, projects or questions…",
    close: "Close",
    suggestions: "Pages",
    groups: {
      pages: "Pages",
      projects: "Projects",
      faq: "Frequently asked questions",
    },
    results: "{n} results found",
    empty: "No results for \"{q}\".",
    emptyHint: "Try a different word or write to us.",
    hints: {
      navigate: "move",
      select: "open",
      close: "close",
    },
    pages: {
      home: {
        title: "Home",
        text: "MehPiX software studio: projects, values, roadmap and partnerships.",
        keywords: "home mehpix roadmap values numbers partnerships microcore mehbur07 personal sites",
      },
      projects: {
        title: "Projects",
        text: "All our projects: PyAI and Quiz.",
        keywords: "portfolio app hardware download",
      },
      projectPyai: {
        title: "PyAI",
        text: "A single-file chatbot for Windows; download and file verification.",
        keywords: "chatbot exe download windows smartscreen python",
      },
      projectQuiz: {
        title: "Quiz (Arduino)",
        text: "Arduino arithmetic quiz: how to play, parts list and wiring table.",
        keywords: "arduino lcd button buzzer pin wiring table circuit diagram zip download c++",
      },
      about: {
        title: "About",
        text: "Our story, our values and our roadmap.",
        keywords: "who we are story vision founded values roadmap",
      },
      contact: {
        title: "Contact",
        text: "Send us a message or an email.",
        keywords: "email mail form message github partnership",
      },
      faq: {
        title: "Frequently asked questions",
        text: "Questions about MehPiX, PyAI, Quiz and downloads.",
        keywords: "faq question answer help",
      },
    },
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
      subtitle: "What we are working on, ready for you to download.",
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
          body: "Our first project combining software and hardware: an arithmetic quiz game with an LCD screen, buttons and sound.",
          status: "done",
        },
        {
          date: "November 2026",
          title: "New website",
          body: "Our new multi-page website, in two languages with light and dark themes.",
          status: "progress",
        },
        {
          date: "November 2026",
          title: "Downloads",
          body: "PyAI and Quiz can now be downloaded from this site; Quiz's code is open on GitHub.",
          status: "done",
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
      more: "See all questions",
    },
    cta: {
      eyebrow: "Let's get started",
      title: "Have an idea? Let's code it together.",
      body: "You can always write to us about project ideas, partnerships and questions.",
      mail: "Send an Email",
      projects: "Explore Projects",
    },
  },
  faq: {
    groups: [
      {
        title: "General",
        items: [
          {
            q: "What is MehPiX?",
            a: "MehPiX is a software studio founded on 24 May 2026. We aim to build software that could change the world, from desktop apps to Arduino projects.",
          },
          {
            q: "What do you work on?",
            a: "For now we build desktop software (PyAI) and hardware projects with Arduino (Quiz). We keep working on new projects in AI and hardware.",
          },
        ],
      },
      {
        title: "PyAI",
        items: [
          {
            q: "Where does PyAI store my chats?",
            a: "Your chats and what PyAI learns are stored only on your own computer, in a folder next to the program.",
          },
          {
            q: "Which systems does PyAI run on?",
            a: "PyAI comes as a single .exe file for Windows 10 and 11 (64-bit), about 9 MB. It needs no installation; just run the file.",
          },
          {
            q: "Windows warns me when I open PyAI. Is it safe?",
            a: "PyAI is not code-signed, so Windows may show a \"Windows protected your PC\" warning on first launch. Choose \"More info\" and then \"Run anyway\". You can check that the file has not been altered with the SHA-256 value on the PyAI page.",
          },
        ],
      },
      {
        title: "Quiz",
        items: [
          {
            q: "What do I need to build Quiz?",
            a: "An Arduino Uno, a 16x2 LCD screen with an I2C module, 5 buttons, a buzzer, a breadboard and jumper wires. The wiring table on the Quiz page shows where each wire goes.",
          },
          {
            q: "How do I play Quiz?",
            a: "The D2 button starts the game. You have 20 seconds for each arithmetic question; pick your answer with the A, B or C button, and each correct answer is worth 10 points. A short press on D2 skips a question; holding it for 3 seconds pauses the game.",
          },
          {
            q: "Can I modify Quiz's code?",
            a: "Yes. Quiz is shared under the MIT license: you can use, modify and share the code as long as you keep the license text. The source code is in the mehpix/Quiz repository on GitHub.",
          },
        ],
      },
      {
        title: "Downloads",
        items: [
          {
            q: "How can I download the projects?",
            a: "With the \"Download\" button on each project page. PyAI is a single .exe file (about 9 MB); Quiz is a .zip file with the Arduino code, the wiring table and setup instructions. Files are downloaded from GitHub.",
          },
        ],
      },
      {
        title: "Contact",
        items: [
          {
            q: "How can I contact you?",
            a: "Fill in the form on the contact page or send us an email directly.",
          },
          {
            q: "Can I propose a partnership?",
            a: "Of course. We are open to project ideas and partnership offers; write to us from the contact page.",
          },
        ],
      },
    ],
  },
  pages: {
    projects: {
      meta: {
        title: "Projects — MehPiX",
        description: "MehPiX projects: PyAI, a chatbot for Windows, and Quiz, an arithmetic quiz game running on Arduino.",
      },
      eyebrow: "Portfolio",
      title: "Our Projects",
      subtitle: "From software to hardware, everything we are working on.",
      filterLabel: "Filter by category",
      filters: {
        all: "All",
        app: "App",
        hardware: "Hardware",
      },
      count: "Showing {n} projects",
      details: "View",
    },
    project: {
      back: "All projects",
      download: "Download",
      viewSource: "View on GitHub",
      version: "Version",
      license: "License",
      allRights: "All rights reserved",
      verify: {
        title: "Verify the file",
        body: "To check that the file you downloaded is the one we published, open PowerShell in the folder that contains it and run:",
        expected: "The SHA-256 value it prints should match this one:",
      },
      features: "Features",
      facts: "Details",
      platform: "Platform",
      language: "Language",
      status: "Status",
    },
    pyai: {
      meta: {
        title: "PyAI — MehPiX",
        description: "PyAI: a Windows chatbot that opens from a single file and keeps your chats on your own computer.",
      },
      intro:
        "PyAI is MehPiX's first project. This chatbot needs no installation: open it from a single file and start talking. Your chats and what PyAI learns are stored only on your own computer, in a folder next to the program.",
      features: [
        { title: "Single file", body: "No installation: just run PyAI.exe." },
        { title: "Stays on your computer", body: "Chats are stored in a folder next to the program, on your own computer." },
        { title: "Learns", body: "It keeps what it learns on your computer, together with your chats." },
        { title: "Built with Python", body: "PyAI is written in Python, which also gave it its name." },
      ],
      platform: "Windows 10/11 (64-bit)",
      file: "File",
      smartscreen: {
        title: "Windows warning on first launch",
        body: "PyAI is not code-signed, so Windows may show a \"Windows protected your PC\" (SmartScreen) warning on first launch. This is a general warning for unsigned programs. To run it, click \"More info\" and then \"Run anyway\".",
      },
      fileValue: "PyAI.exe · about 9 MB",
    },
    quiz: {
      meta: {
        title: "Quiz (Arduino) — MehPiX",
        description: "Quiz: an arithmetic quiz game on Arduino Uno with an LCD screen, buttons and sound. Parts list and wiring table.",
      },
      intro:
        "Quiz is our first project combining software and hardware. Running on an Arduino Uno, this arithmetic quiz shows addition, subtraction, multiplication and division questions on a 16x2 LCD screen. You pick the answer with one of three buttons, while a buzzer plays the countdown, right and wrong sounds, and background music.",
      features: [
        { title: "Four operations", body: "Addition, subtraction, multiplication and division questions are generated at random, so every game is different." },
        { title: "Time and score", body: "20 seconds per question; a correct answer is worth 10 points. It beeps during the last 5 seconds." },
        { title: "Sound and music", body: "A start melody, right/wrong sounds and background music you can switch on and off." },
        { title: "Skip and pause", body: "Skip a hard question, or pause the game and resume whenever you like." },
      ],
      howTo: {
        title: "How to play",
        steps: [
          "Power the Arduino: after a welcome message the screen shows \"Baslamak Icin Butona Bas\" (press the button to start).",
          "Press the D2 button; the start melody plays and the first question appears.",
          "You have 20 seconds for each question. The timer counts down in the top right corner and beeps during the last 5 seconds.",
          "Pick your answer with button A (D8), B (D9) or C (D10). A correct answer is worth 10 points; after a wrong one the correct answer is shown.",
          "Press D2 briefly to skip a question, or hold it for 3 seconds to pause and resume the game.",
          "The music button (D11) turns the background music on and off. After 100 questions your total score appears on the screen.",
        ],
      },
      parts: {
        title: "Parts you need",
        items: [
          "Arduino Uno",
          "16x2 LCD screen (with I2C module, address 0x27)",
          "5 buttons (4 game buttons + 1 music button)",
          "Buzzer or small speaker",
          "Breadboard and jumper wires",
        ],
        library: "The code uses the LiquidCrystal_I2C library, which you can install from the Library Manager in the Arduino IDE.",
      },
      wiring: {
        title: "Wiring table",
        subtitle: "Which Arduino pin each component connects to. The buttons use the internal pull-up resistors, so no extra resistors are needed.",
        image: "Open the table as an image",
        headers: {
          component: "Component",
          pin: "Component pin",
          arduino: "Arduino pin",
          note: "Description",
        },
        groups: [
          {
            component: "LCD screen (I2C)",
            rows: [
              { pin: "GND", arduino: "GND", note: "Ground" },
              { pin: "VCC", arduino: "5V", note: "Supply voltage" },
              { pin: "SDA", arduino: "A4 (SDA)", note: "I2C data line (Uno)" },
              { pin: "SCL", arduino: "A5 (SCL)", note: "I2C clock line (Uno)" },
            ],
          },
          {
            component: "Button 1 (D2)",
            rows: [
              { pin: "First leg", arduino: "Digital pin 2", note: "Start; short press: skip, long press: pause" },
              { pin: "Other leg", arduino: "GND", note: "" },
            ],
          },
          {
            component: "Button 2 (D8)",
            rows: [
              { pin: "First leg", arduino: "Digital pin 8", note: "Option A" },
              { pin: "Other leg", arduino: "GND", note: "" },
            ],
          },
          {
            component: "Button 3 (D9)",
            rows: [
              { pin: "First leg", arduino: "Digital pin 9", note: "Option B" },
              { pin: "Other leg", arduino: "GND", note: "" },
            ],
          },
          {
            component: "Button 4 (D10)",
            rows: [
              { pin: "First leg", arduino: "Digital pin 10", note: "Option C" },
              { pin: "Other leg", arduino: "GND", note: "" },
            ],
          },
          {
            component: "Music button",
            rows: [
              { pin: "First leg", arduino: "Digital pin 11 (mz_ak)", note: "Music on/off" },
              { pin: "Other leg", arduino: "GND", note: "" },
            ],
          },
          {
            component: "Buzzer / speaker",
            rows: [
              { pin: "Positive (+) leg", arduino: "Digital pin 6", note: "Sound effects and melodies (tone output)" },
              { pin: "Negative (−) leg", arduino: "GND", note: "" },
            ],
          },
        ],
      },
      platform: "Arduino Uno",
      library: "Library",
      zip: {
        title: "What's in the zip?",
        body: "Quiz.zip contains the Arduino code (Quiz.ino), the wiring table (BAGLANTI.md and an image), setup instructions (README.md) and the MIT license. Unzip it and open Quiz.ino from the Quiz folder in the Arduino IDE.",
      },
    },
    about: {
      meta: {
        title: "About — MehPiX",
        description: "Who is MehPiX and why do we code? Our story, our values and our roadmap.",
      },
      eyebrow: "About us",
      title: "Who we are and why we code",
      subtitle: "Hi, we are MehPiX. Our goal is to build software that could change the world.",
      valuesSubtitle: "We work by these four principles.",
      story: {
        eyebrow: "Our story",
        title: "We started small, with big goals",
        paragraphs: [
          "MehPiX was founded on 24 May 2026. Since then we have been writing code for one goal: building useful software that could change the world.",
          "Our first project was PyAI, a chatbot that needs no installation and keeps your chats on your own computer. Then we brought software and hardware together and built Quiz, an arithmetic quiz game on Arduino with an LCD screen.",
          "With every project we learn something new, and we share what we learn.",
          "Sharing matters to us: Quiz is open source, and its code is publicly available on GitHub under the MIT license. PyAI is free to download. You can follow all of our projects on our GitHub account (github.com/mehpix).",
        ],
      },
      facts: [
        { label: "Founded", value: "Active since 24 May 2026" },
        { label: "Our focus", value: "Software development" },
        { label: "Our vision", value: "Building software that could change the world" },
      ],
    },
    contact: {
      meta: {
        title: "Contact — MehPiX",
        description: "Write to MehPiX about project ideas, partnership offers and questions.",
      },
      eyebrow: "Let's get started",
      title: "Contact",
      subtitle: "Write to us about project ideas, partnership offers and questions.",
      form: {
        title: "Send us a message",
        name: "Your name",
        email: "Your email address",
        subject: "Subject",
        message: "Your message",
        send: "Send Message",
        sending: "Sending…",
        success: "Your message has reached us. Thank you!",
        error: "The message could not be sent. Please try again or email us directly.",
        noteService: "The form delivers your message to our email address through the Web3Forms service. Your details are used only to reply to you.",
        noteMail: "When you press Send, your email app opens with your message ready to go.",
        mailSubject: "Message from the MehPiX website",
      },
      info: {
        email: "Email",
        github: "GitHub",
        time: "Local time",
        timeLabel: "Türkiye",
      },
    },
    faq: {
      meta: {
        title: "Frequently Asked Questions — MehPiX",
        description: "Frequently asked questions about MehPiX, PyAI, Quiz, downloads and contact.",
      },
      eyebrow: "Good to know",
      title: "Frequently asked questions",
      subtitle: "What people often ask about MehPiX and our projects.",
      ask: {
        title: "Can't find your answer here?",
        body: "Write to us and we will get back to you.",
        cta: "Get in Touch",
      },
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
      body: "An arithmetic quiz game on Arduino: questions appear on an LCD screen, answers are picked with three buttons, and a buzzer plays sound effects and music.",
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
    note: "This page is for development and is not indexed by search engines.",
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
    links: "You might be looking for:",
  },
  error: {
    title: "Something went wrong",
    body: "An unexpected error occurred. Please refresh the page.",
  },
};

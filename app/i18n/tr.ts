// Türkçe metinler. Yeni bir metin eklerken aynı anahtarı en.ts dosyasına da ekleyin;
// TypeScript, İngilizce sözlükte eksik anahtar kalırsa hata verir.
export const tr = {
  meta: {
    title: "MehPiX — Yazılım Stüdyosu",
    description:
      "MehPiX, dünyayı değiştirebilecek yazılımlar geliştiren bir yazılım stüdyosu. Yeni sitemiz çok yakında.",
  },
  a11y: {
    skip: "İçeriğe geç",
  },
  nav: {
    label: "Ana menü",
    home: "MehPiX ana sayfa",
    projects: "Projeler",
    about: "Hakkımızda",
    faq: "SSS",
    contact: "İletişim",
    cta: "İletişime Geç",
    open: "Menüyü aç",
    close: "Menüyü kapat",
  },
  theme: {
    toLight: "Açık temaya geç",
    toDark: "Koyu temaya geç",
  },
  lang: {
    label: "Dil seçimi",
  },
  footer: {
    tagline: "Dünyayı değiştirebilecek yazılımlar üretmek için bir aradayız.",
    site: "Site",
    projects: "Projeler",
    links: "Bağlantılar",
    time: "Türkiye",
    rights: "Tüm hakları saklıdır.",
    top: "Yukarı çık",
  },
  construction: {
    eyebrow: "Yazılım · İnovasyon · 2026",
    title: "Yeni sitemiz yapım aşamasında.",
    body: "Geleceği kodlamaya devam ediyoruz. Projelerimizi, iş birliklerimizi ve çok daha fazlasını yakında burada bulabileceksiniz.",
  },
  projects: {
    pyai: {
      title: "PyAI",
      tag: "Chatbot",
      body: "MehPiX'in ilk projesi. Tek dosyayla açılan bir sohbet botu; sohbetler ve öğrendikleri yalnızca senin bilgisayarında kalır.",
    },
    quiz: {
      title: "Quiz",
      tag: "Arduino",
      body: "Arduino ile çalışan bir bilgi yarışması: sorular LCD ekranda görünür, cevaplar üç butonla seçilir, buzzer ses efektlerini çalar.",
    },
  },
  design: {
    meta: {
      title: "Tasarım Sistemi — MehPiX",
      description: "MehPiX sitesinde kullanılan renkler, yazı tipleri ve bileşenler.",
    },
    eyebrow: "Tasarım Sistemi",
    title: "MehPiX tasarım dili",
    subtitle:
      "Sitenin tüm sayfalarında kullanılan renkler, yazı tipleri ve bileşenler. Sağ üstteki düğmeyle açık ve koyu tema arasında geçiş yapabilirsiniz.",
    note: "Bu sayfa geliştirme amaçlıdır. Menüdeki sayfalar Faz 4'te eklenecek; o zamana kadar bağlantılar 404 sayfasına gider.",
    colors: {
      eyebrow: "Renkler",
      title: "Renk paleti",
      subtitle:
        "Logodaki neon camgöbeğinden türetildi. Açık temada okunabilirlik için vurgu rengi koyulaşır.",
    },
    type: {
      eyebrow: "Tipografi",
      title: "Yazı tipleri",
      display: "Başlıklar · Space Grotesk",
      body: "Metin · Inter",
      mono: "Etiketler · JetBrains Mono",
      sample: "Geleceği kodluyoruz.",
      paragraph:
        "Fikirlerden dijital deneyimlere uzanan yolculuğumuzu keşfedin. Türkçe karakter testi: çğıöşü ÇĞİÖŞÜ.",
    },
    components: {
      eyebrow: "Bileşenler",
      buttons: "Butonlar",
      badges: "Rozetler",
      cards: "Kartlar",
      sections: "Bölüm başlıkları",
      primary: "Projeleri Keşfet",
      outline: "Hakkımızda",
      ghost: "Daha fazla",
      external: "MicroCore",
      live: "Yayında",
      soon: "Yakında",
      partner: "Partner",
      details: "İncele",
      sampleEyebrow: "Portföyümüz",
      sampleTitle: "Projelerimiz",
      sampleSubtitle: "Üzerinde çalıştıklarımız ve yayında olanlar.",
    },
  },
  notFound: {
    title: "Sayfa bulunamadı",
    body: "Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.",
    home: "Ana sayfaya dön",
  },
  error: {
    title: "Bir şeyler ters gitti",
    body: "Beklenmeyen bir hata oluştu. Lütfen sayfayı yenileyin.",
  },
} as const;

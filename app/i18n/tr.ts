// Türkçe metinler. Yeni bir metin eklerken aynı anahtarı en.ts dosyasına da ekleyin;
// TypeScript, İngilizce sözlükte eksik anahtar kalırsa hata verir.
export const tr = {
  meta: {
    title: "MehPiX — Yazılım Stüdyosu",
    description:
      "MehPiX, dünyayı değiştirebilecek yazılımlar geliştiren bir yazılım stüdyosu. Yeni sitemiz çok yakında.",
  },
  construction: {
    eyebrow: "Yazılım · İnovasyon · 2026",
    title: "Yeni sitemiz yapım aşamasında.",
    body: "Geleceği kodlamaya devam ediyoruz. Projelerimizi, iş birliklerimizi ve çok daha fazlasını yakında burada bulabileceksiniz.",
    switchLabel: "English",
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

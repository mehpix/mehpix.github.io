# MehPiX — Yazılım Stüdyosu Sitesi

MehPiX'in resmi web sitesi. Stüdyonun projelerini (PyAI, Quiz), iş birliklerini,
ekibin kişisel sitelerini ve iletişim bilgilerini tanıtır.

- **Yayın adresi:** https://mehpix.github.io *(Faz 1 tamamlanınca aktif olacak)*
- **Durum:** Faz 0 — hazırlık. Planın tamamı için [ROADMAP.md](ROADMAP.md) dosyasına bakın.

## Kullanılan teknolojiler

| Teknoloji | Görevi |
|---|---|
| React + TypeScript | Sayfaların ve bileşenlerin yazıldığı arayüz kütüphanesi |
| Vite | Geliştirme sunucusu ve derleme aracı |
| Tailwind CSS | Stil (tasarım) sistemi |
| pnpm | Paket yöneticisi |
| GitHub Pages + GitHub Actions | Otomatik derleme ve yayın |

## Kurulum

> Aşağıdaki komutlar Faz 1'de proje iskeleti kurulduktan sonra çalışır.

Gereksinimler: [Node.js](https://nodejs.org/) 24+ ve [pnpm](https://pnpm.io/).

```bash
pnpm install   # bağımlılıkları kur
pnpm dev       # geliştirme sunucusunu başlat (http://localhost:5173)
pnpm build     # yayına hazır dosyaları dist/ klasörüne üret
```

## Klasör yapısı

```
public/images/   Logolar ve görseller
ROADMAP.md       Proje yol haritası ve fazlar
PROGRESS.md      Oturumlar arası ilerleme notları
CHANGELOG.md     Sürüm değişiklik geçmişi
```

## Lisans

© 2026 MehPiX. Tüm hakları saklıdır.

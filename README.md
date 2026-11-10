# MehPiX — Yazılım Stüdyosu Sitesi

MehPiX'in resmi web sitesi. Stüdyonun projelerini (PyAI, Quiz), iş birliklerini,
ekibin kişisel sitelerini ve iletişim bilgilerini tanıtır.

- **Yayın adresi:** https://mehpix.github.io
- **Durum:** Faz 1 tamamlandı — iskelet kuruldu, geçici "yapım aşamasında" sayfası yayında.
  Planın tamamı için [ROADMAP.md](ROADMAP.md) dosyasına bakın.

## Kullanılan teknolojiler

| Teknoloji | Görevi |
|---|---|
| React 19 + TypeScript | Sayfaların ve bileşenlerin yazıldığı arayüz kütüphanesi |
| React Router 8 (framework modu) | Sayfa yönlendirme ve derleme sırasında sayfaları hazır HTML'e çevirme (prerender) |
| Vite 8 | Geliştirme sunucusu ve derleme aracı |
| Tailwind CSS 4 | Stil (tasarım) sistemi |
| ESLint | Kod kalite kontrolü |
| pnpm | Paket yöneticisi |
| GitHub Pages + GitHub Actions | Otomatik derleme ve yayın |

## Kurulum

Gereksinimler: [Node.js](https://nodejs.org/) 24+ ve [pnpm](https://pnpm.io/).

```bash
pnpm install     # bağımlılıkları kur
pnpm dev         # geliştirme sunucusunu başlat (http://localhost:5173)
pnpm lint        # kod kalite kontrolü
pnpm typecheck   # TypeScript tip kontrolü
pnpm build       # yayına hazır dosyaları build/client/ klasörüne üret
pnpm preview     # derlenmiş siteyi yerelde önizle
```

## Yayın

`main` branch'ine her merge'de [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
çalışır: lint, tip kontrolü ve derleme geçerse site https://mehpix.github.io adresine yayınlanır.
Pull Request'lerde aynı kontroller çalışır ama yayın yapılmaz.

## Dil desteği

Türkçe varsayılandır ve adreste ön ek almaz (`/`), İngilizce sayfalar `/en` ile başlar.
Metinler [app/i18n/tr.ts](app/i18n/tr.ts) ve [app/i18n/en.ts](app/i18n/en.ts) dosyalarındadır;
Türkçe'ye eklenen bir metin İngilizce'de eksik kalırsa tip kontrolü hata verir.

## Klasör yapısı

```
app/
  root.tsx         Tüm sayfaları saran HTML iskeleti ve hata/404 ekranı
  routes.ts        Sayfa listesi (her sayfa TR + EN olarak tanımlanır)
  routes/          Sayfa bileşenleri
  i18n/            Türkçe ve İngilizce metinler
  app.css          Genel stiller (Tailwind)
public/images/     Logolar ve görseller
.github/workflows/ Otomatik derleme ve yayın
ROADMAP.md         Proje yol haritası ve fazlar
PROGRESS.md        Oturumlar arası ilerleme notları
CHANGELOG.md       Sürüm değişiklik geçmişi
```

## Lisans

© 2026 MehPiX. Tüm hakları saklıdır.

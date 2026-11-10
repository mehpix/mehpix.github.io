# MehPiX — Yazılım Stüdyosu Sitesi

MehPiX'in resmi web sitesi. Stüdyonun projelerini (PyAI, Quiz), iş birliklerini,
ekibin kişisel sitelerini ve iletişim bilgilerini tanıtır.

- **Yayın adresi:** https://mehpix.github.io
- **Durum:** Faz 4 tamamlandı — ana sayfa ve tüm alt sayfalar (Projeler, PyAI, Quiz, Hakkımızda,
  İletişim, SSS) Türkçe ve İngilizce olarak yayında. İndirmeler Faz 5'te gelecek.
  Bileşen vitrini: https://mehpix.github.io/tasarim (arama motorlarına kapalı).
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

## Ortam değişkenleri (.env)

İletişim formu mesajları [Web3Forms](https://web3forms.com) hizmetiyle e-postaya iletir.
Bunun için bir erişim anahtarı gerekir:

1. [.env.example](.env.example) dosyasını `.env` adıyla kopyalayın ve `VITE_WEB3FORMS_KEY`
   değerini doldurun (yerelde denemek için). `.env` git'e eklenmez.
2. Yayın için aynı anahtarı GitHub reposunda **Settings → Secrets and variables → Actions**
   altına `WEB3FORMS_KEY` adıyla ekleyin. Yayın iş akışı bu değeri derleme sırasında okur.

Anahtar tanımlı değilse form çalışmaya devam eder: "Gönder" butonu ziyaretçinin e-posta
uygulamasını mesaj hazır şekilde açar.

> Not: Web3Forms anahtarı tarayıcıda çalışan koda gömülür, yani gerçek anlamda gizli değildir
> (Web3Forms da bunu bu şekilde tasarlamıştır). Yine de kod içine yazılmaz; böylece değiştirmek
> ya da iptal etmek kolay olur.

## Yayın

`main` branch'ine her merge'de [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
çalışır: lint, tip kontrolü ve derleme geçerse site https://mehpix.github.io adresine yayınlanır.
Pull Request'lerde aynı kontroller çalışır ama yayın yapılmaz.

## Dil desteği

Türkçe varsayılandır ve adreste ön ek almaz (`/`), İngilizce sayfalar `/en` ile başlar.
Metinler [app/i18n/tr.ts](app/i18n/tr.ts) ve [app/i18n/en.ts](app/i18n/en.ts) dosyalarındadır;
Türkçe'ye eklenen bir metin İngilizce'de eksik kalırsa tip kontrolü hata verir.

## Tasarım sistemi

- **Renkler** [app/app.css](app/app.css) içinde CSS değişkenleri olarak tanımlıdır (`--bg`, `--accent` ...).
  Bileşenler doğrudan renk kodu yerine `bg-surface`, `text-accent` gibi sınıfları kullanır;
  tema değişince yalnızca değişkenler değişir.
- **Tema:** Koyu neon varsayılandır. Seçim tarayıcıda (`localStorage`) hatırlanır ve sayfa
  açılırken renk "zıplaması" olmaması için `<head>` içindeki küçük bir betikle uygulanır.
- **Fontlar:** Space Grotesk (başlık), Inter (metin), JetBrains Mono (etiket). Siteyle birlikte
  barındırılır; Google'a istek gitmez.
- **Bileşenler:** `components/ui` (Button, Card, Badge, SectionHeader, Container, Marquee,
  CountUp), `components/layout` (Navbar, Footer, ThemeToggle, LangSwitch, LiveClock) ve
  `components/home` (ana sayfa bölümleri).

## Ana sayfa

Bölümler sırasıyla: karşılama (hero), kayan yazı şeridi, projeler, değerler, sayaçlar,
yol haritası, iş birlikleri ve kişisel siteler, SSS ve iletişim bandı.

- **Metinler** (yol haritası maddeleri, SSS soruları dahil) sözlük dosyalarındaki `home` bölümündedir.
- **Sayaçlardaki rakamlar** gerçektir ve [app/components/home/StatsSection.tsx](app/components/home/StatsSection.tsx)
  içinde tutulur; proje sayısı proje listesinden otomatik hesaplanır.
- **Projeler** [app/data/projects.ts](app/data/projects.ts) dosyasındadır (görsel, durum, teknoloji).
- **SSS** sözlüklerdeki `faq.groups` altında konu gruplarına ayrılmıştır. Ana sayfa her grubun
  ilk sorusunu, `/sss` sayfası tamamını gösterir.

## Sayfalar

| Türkçe | İngilizce | İçerik |
|---|---|---|
| `/` | `/en` | Ana sayfa |
| `/projeler` | `/en/projects` | Kategoriye göre filtrelenebilen proje listesi |
| `/projeler/pyai` | `/en/projects/pyai` | PyAI: özellikler ve bilgiler |
| `/projeler/quiz` | `/en/projects/quiz` | Quiz: oynanış, parça listesi, bağlantı tablosu |
| `/hakkimizda` | `/en/about` | Hikâye, değerler, yol haritası |
| `/iletisim` | `/en/contact` | İletişim formu ve bilgileri |
| `/sss` | `/en/faq` | Tüm sorular |
| `/tasarim` | `/en/design` | Bileşen vitrini (arama motorlarına kapalı) |

Adresler [app/lib/paths.ts](app/lib/paths.ts), her sayfanın başlık/açıklama bilgileri
[app/lib/meta.ts](app/lib/meta.ts) üzerinden yönetilir. Bulunamayan adresler menü ve
footer'lı 404 ekranını gösterir.

## Klasör yapısı

```
app/
  root.tsx         Tüm sayfaları saran HTML iskeleti ve hata/404 ekranı
  routes.ts        Sayfa listesi (her sayfa TR + EN olarak tanımlanır)
  routes/          Sayfa bileşenleri (_site.tsx: menü + footer düzeni)
  components/      Ortak arayüz bileşenleri (home/: ana sayfa bölümleri)
  data/            Proje bilgileri (kategori, durum, detay sayfası)
  lib/paths.ts     Tüm sayfaların TR/EN adresleri
  lib/meta.ts      Sayfa başlığı, açıklama ve dil alternatifleri
  lib/site.ts      İletişim e-postası ve dış bağlantılar
  lib/theme.ts     Koyu/açık tema yönetimi
  i18n/            Türkçe ve İngilizce metinler
  app.css          Renk değişkenleri, fontlar ve genel stiller (Tailwind)
public/images/     Logolar ve görseller
.github/workflows/ Otomatik derleme ve yayın
ROADMAP.md         Proje yol haritası ve fazlar
PROGRESS.md        Oturumlar arası ilerleme notları
CHANGELOG.md       Sürüm değişiklik geçmişi
```

## Lisans

© 2026 MehPiX. Tüm hakları saklıdır.

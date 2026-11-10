# MehPiX Sitesi — Yol Haritası

Amaç: [mehpix.lovable.app](https://mehpix.lovable.app/) sitesini, düzen ve bileşenler için
[microcore.lovable.app](https://microcore.lovable.app/) sitesini referans alarak yeniden yapmak.
Kimlik (neon tema, logo, metinler) MehPiX'e ait kalır; sahte yorum veya şişirilmiş rakam kullanılmaz.

- **Yayın adresi:** https://mehpix.github.io (GitHub `mehpix` organization'ı, `mehpix.github.io` reposu)
- **Teknoloji:** React + Vite + TypeScript + Tailwind CSS, paket yöneticisi pnpm
- **Yayın:** GitHub Pages + GitHub Actions; her sayfa prerender ile hazır HTML olarak üretilir
- **Dil:** Türkçe (varsayılan) ve İngilizce (`/en/...`)
- **Tema:** Koyu neon (varsayılan) + açık tema seçeneği

## Fazlar

| Faz | İçerik | Sonuç | Branch |
|---|---|---|---|
| ✅ **0. Hazırlık** | Git kimliği, pnpm, README, `.gitignore`, `.gitattributes`, PROGRESS, CHANGELOG, logolar; GitHub reposu, branch koruması, Dependabot | Düzgün kurulmuş boş repo | ilk yükleme → `main` |
| ✅ **1. İskelet** | Vite kurulumu, routing, TR/EN i18n altyapısı, prerender, GitHub Actions ile otomatik yayın | `mehpix.github.io` açılıyor ("yapım aşamasında") | `feature/project-scaffold` |
| ✅ **2. Tasarım sistemi** | Neon camgöbeği renk paleti, fontlar, koyu/açık tema, ortak bileşenler (menü, canlı saatli footer, buton, kart, "01 / 02" bölüm başlığı) | Sitenin görsel dili hazır | `feature/design-system` |
| ✅ **3. Ana sayfa** | Hero, kayan yazı şeridi, projeler, değerler, gerçek rakamlarla sayaçlar, yol haritası, iş birlikleri, kişisel siteler, SSS, çağrı bandı | MicroCore düzeninde ana sayfa | `feature/home-page` |
| **4. Alt sayfalar** | `/projeler` (filtreli), `/projeler/pyai`, `/projeler/quiz`, `/hakkimizda`, `/iletisim` (çalışan form), `/sss`, 404 + `/en/...` karşılıkları | Çok sayfalı, iki dilli site | `feature/pages` |
| **5. İndirmeler** | PyAI.exe ve Quiz.zip (Quiz.ino + devre şeması) GitHub Releases'e; "İndir" butonları bağlanır | İndirmeler çalışıyor | `feature/downloads` |
| **6. Arama** | ⌘K / Ctrl+K arama penceresi (sayfalar, projeler, SSS); tarayıcıda çalışır | Arama hazır | `feature/search` |
| **7. Cila ve yayın** | SEO (meta, OG görseli, sitemap), mobil, erişilebilirlik, performans, görsel optimizasyonu | **v1.0.0** | `chore/launch-polish` |

Her faz kendi branch'inde yapılır ve Pull Request ile `main`'e girer.

## İçerik envanteri

| İçerik | Kaynak | Not |
|---|---|---|
| MPX logosu | `public/images/mpx-logo.jpg` | Faz 7'de küçültülüp WebP'ye çevrilecek |
| Mehbur07 logosu | `public/images/mehbur-logo.jpg` | Kişisel siteler: mehbur07.lovable.app |
| MicroCore logosu | `public/images/microcore-logo.png` | Düşük çözünürlük (~165 px); büyüğü gelirse değişecek |
| Quiz logosu | `public/images/quiz-logo.jpg` | Projeler: Quiz (Arduino) |
| Quiz bağlantı tablosu | `public/images/quiz-baglanti-tablosu.png` | Sitede HTML tablo olarak da gösterilecek |
| PyAI.exe | `projelerim/Py/PyAI/PyAI.exe` (~9 MB) | GitHub Releases; imzasız, SmartScreen uyarısı notu eklenecek |
| Quiz.ino | `projelerim/C++/Quiz.ino` | Zip: Quiz.ino + bağlantı tablosu görseli + `BAGLANTI.md` |

## Açık kararlar

- **Faz 4:** İletişim formu için Web3Forms anahtarı (`.env` + GitHub secret).
- **Faz 5:** İndirmeler için ayrı repolar önerisi (`mehpix/PyAI`, `mehpix/Quiz`) — onay bekliyor.
- **Faz 5:** Bağlantı tablosundaki "Dijital Pin 11 (mz_ak)" ifadesi `Quiz.ino` ile doğrulanacak.

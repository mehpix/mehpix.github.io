# İlerleme Notları

### [2026-11-10 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - Web3Forms anahtarı `WEB3FORMS_KEY` GitHub secret'ı ve yerel `.env` olarak eklendi; site yeniden yayınlandı, form doğrudan e-posta gönderiyor
  - Faz 5 (`feature/downloads`): `mehpix/Quiz` (MIT, kod + BAGLANTI.md + Release'te Quiz.zip) ve `mehpix/PyAI` (README + Release'te PyAI.exe) public repoları açıldı; ikisinde de branch koruması ve Dependabot uyarıları aktif
  - `Quiz.ino` düzeltildi (orijinal + repo): `soruAktif` yazım hatası, kullanılmayan Adafruit/splash include'ları kaldırıldı. Orijinalin yedeği alındı
  - Site: projeler "Yayında"; detay sayfalarında İndir + GitHub butonları, sürüm/boyut, SHA-256 doğrulama bloğu, PyAI için SmartScreen notu; yol haritasında "İndirmeler" tamamlandı; SSS'ye 2 soru eklendi
  - PyAI.exe yayınlanmadan önce tarandı: API anahtarı veya HTTP/AI kütüphanesi izi yok (x64, Python 3.14, PyInstaller)
- **Son Commit:** f8080e9 Merge pull request #4 from mehpix/feature/pages
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Faz 6 — `feature/search`: ⌘K / Ctrl+K arama penceresi (sayfalar, projeler, SSS)
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - Quiz.ino düzeltmesi derlenerek doğrulanmadı (Arduino IDE/CLI kurulu değil); kullanıcı Arduino IDE'de denemeli
  - Yeni PyAI/Quiz sürümünde `app/data/projects.ts` içindeki version/size/sha256 güncellenmeli
  - `.vscode/settings.json` takip edilmiyor (kullanıcının editör ayarı); commit'lere eklenmedi

### [2026-11-10 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - Faz 4 (`feature/pages`): `/projeler` (Uygulama/Donanım filtresi), `/projeler/pyai`, `/projeler/quiz`, `/hakkimizda`, `/iletisim`, `/sss` + `/en/...` karşılıkları; toplam 16 sayfa prerender ediliyor
  - Faz 3'teki `linkFor`/`READY_PAGES` geçici yönlendirmesi kaldırıldı; menü artık gerçek sayfalara gidiyor. Detay sayfalarında menüde "Projeler" aktif görünüyor
  - SSS tek kaynakta (`faq.groups`); ana sayfa her grubun ilk sorusunu gösteriyor. Sayfa meta bilgileri `app/lib/meta.ts` ile (OG + hreflang)
  - İletişim formu Web3Forms'a gönderiyor; anahtar `VITE_WEB3FORMS_KEY` (.env) / `WEB3FORMS_KEY` (GitHub secret). Anahtar yoksa mailto'ya düşüyor. `.env.example` eklendi
  - Quiz içeriği `Quiz.ino`'dan doğrulandı: dört işlem, 20 sn, 10 puan, D2 kısa=pas / 3 sn=duraklat, D11 müzik, 100 soru. "Bilgi yarışması" → "matematik yarışması"
- **Son Commit:** 4180d78 Merge pull request #3 from mehpix/feature/home-page
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Faz 5 — `feature/downloads`: önce `Quiz.ino` yazım hatasının nasıl düzeltileceğini ve ayrı repo önerisini kullanıcıya sor
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - `WEB3FORMS_KEY` secret'ı henüz eklenmedi; form şimdilik e-posta uygulamasını açıyor
  - `Quiz.ino` 247. satır: `soruaktif` → `soruAktif` (derleme hatası); dosya repo dışında, dokunulmadı
  - `vite preview` sonunda "/" olmayan adreslerde ana sayfayı veriyor (yalnızca yerel önizleme; GitHub Pages "/" ekleyerek yönlendiriyor)

### [2026-11-10 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - Faz 3 (`feature/home-page`): ana sayfa menü + footer düzenine alındı; bölümler `app/components/home/` altında (Hero, Marquee, Projeler, Değerler, Sayaçlar, Yol Haritası, Bağlantılar, SSS, CTA bandı)
  - Menüdeki henüz yapılmamış sayfalar `linkFor` ile ana sayfadaki bölüme yönleniyor (`/#projeler`, `/#hakkimizda`, `/#sss`, `/#iletisim`); Faz 4'te `READY_PAGES` listesine eklenecek
  - Sayaçlar gerçek rakamlar: 2 proje, 2 programlama dili, 1 iş birliği, 2026 kuruluş. Sayma efekti yalnızca tarayıcıda; prerender HTML'de gerçek değer var
  - PyAI kaynak kodu elimizde olmadığı için "veriler dışarı gitmez" denmedi; yalnızca "sohbetler bilgisayarınızda saklanır" ifadesi kullanıldı
  - Site metinleri "siz" diliyle tutarlı hale getirildi; marka/teknoloji rozetlerine `lang="en"` verildi ("ARDUİNO" sorunu çözüldü)
- **Son Commit:** 6e23605 Merge pull request #2 from mehpix/feature/design-system
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Faz 4 — `feature/pages`: alt sayfalar (/projeler, proje detayları, /hakkimizda, /iletisim formu, /sss) + EN karşılıkları; her sayfa bitince `READY_PAGES`'e eklenecek
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - İletişim formu için Web3Forms anahtarı gerekecek (`.env` + GitHub secret)
  - Proje kartları henüz tıklanmıyor; detay sayfaları Faz 4'te gelince `href` verilecek
  - `pnpm audit`: minimatch orta seviye açık hâlâ duruyor (yalnızca ESLint geliştirme aracında)

### [2026-11-10 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - Faz 2 (`feature/design-system`): CSS değişkenli renk paleti (koyu varsayılan + açık tema, açık temada AA kontrastlı koyu camgöbeği vurgu)
  - Tema seçimi `localStorage`'da tutuluyor; `<head>` içindeki betik renk zıplamasını önlüyor
  - Fontlar `@fontsource-variable` ile self-host: Space Grotesk, Inter, JetBrains Mono (Türkçe karakter destekli)
  - Bileşenler: Navbar (mobil menü), Footer (canlı Türkiye saati), Button/ButtonLink, Card, Badge, SectionHeader, Container, LangSwitch, ThemeToggle
  - Sayfa adresleri `app/lib/paths.ts` içinde merkezi; `/tasarim` + `/en/design` vitrin sayfası (noindex). Ana sayfa menüsüz kaldı çünkü menü sayfaları Faz 4'te geliyor
- **Son Commit:** a901726 Merge pull request #1 from mehpix/feature/project-scaffold
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Faz 3 — `feature/home-page`: yol haritası maddeleri ve SSS taslağını kullanıcıya onaya sun, sonra ana sayfayı kur
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - Menüdeki bağlantılar (Projeler, Hakkımızda, SSS, İletişim) Faz 4'e kadar 404 sayfasına gider
  - Türkçe sayfalarda büyük harfe çevrilen marka adları Türkçe kurala göre "ARDUİNO" gibi görünür; gerekirse rozetlere `lang="en"` verilecek
  - Headless Edge pencereyi ~500 px'ten dar açmıyor; mobil ekran görüntüsü için iframe sarmalayıcı kullanıldı

### [2026-11-10 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - Faz 0 tamamlandı: `mehpix` organization'ı ve public `mehpix/mehpix.github.io` reposu açıldı; branch koruması ve Dependabot aktif
  - Faz 1 (`feature/project-scaffold`): React Router 8 (framework modu, `ssr:false` + prerender), Vite 8, Tailwind 4, ESLint kuruldu
  - TR/EN dil altyapısı kütüphanesiz sözlükle yapıldı (`app/i18n`); Türkçe ön eksiz, İngilizce `/en`
  - GitHub Actions iş akışı: PR'da lint + tip kontrolü + derleme; main'de ek olarak Pages'e yayın. Pages kaynağı "workflow" yapıldı
  - TypeScript 7 yerine 6.0.3 seçildi (typescript-eslint henüz TS 7 desteklemiyor)
- **Son Commit:** 50a8296 chore: initialize project with roadmap, docs and brand assets
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Faz 2 — `feature/design-system` branch'inde renk paleti, fontlar, koyu/açık tema ve ortak bileşenler
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - `pnpm audit`: minimatch 10.2.6'da 1 orta seviye açık (yalnızca ESLint geliştirme aracında, sitede değil); düzeltme 11.x major sürümünde, ESLint güncellemesi beklenecek
  - Ana sayfadaki MPX logosu ~2 MB; Faz 7'de optimize edilecek

### [2026-11-10 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - mehpix.lovable.app, microcore.lovable.app referans alınarak yeniden yapılacak; yol haritası 8 faza bölündü (ROADMAP.md)
  - Kararlar: yerel kod + GitHub Pages (`mehpix` organization'ı, `mehpix.github.io`), çok sayfa, TR/EN, koyu + açık tema, ⌘K arama
  - Faz 0: README, CHANGELOG, ROADMAP, `.gitignore`, `.gitattributes` oluşturuldu; logolar `public/images/` altına kopyalandı
  - pnpm 12.18.0 kullanıcı düzeyinde kuruldu (corepack yönetici izni istediği için npm ile)
- **Son Commit:** ilk yükleme, commit yok
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Faz 1 — `feature/project-scaffold` branch'inde Vite + React + TS + Tailwind iskeleti, i18n, prerender ve GitHub Pages yayını
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - GitHub Pages kullanıcı sitesi ücretsiz planda public repo gerektirir
  - Logolar büyük boyutlu (~2 MB); Faz 7'de optimize edilecek
  - MicroCore logosu düşük çözünürlüklü

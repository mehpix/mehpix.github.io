# İlerleme Notları

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

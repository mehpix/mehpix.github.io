# İlerleme Notları

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

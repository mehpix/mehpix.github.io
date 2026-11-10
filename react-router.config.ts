import type { Config } from "@react-router/dev/config";

export default {
  // GitHub Pages yalnızca statik dosya sunar; çalışan bir sunucu yoktur.
  ssr: false,
  // routes.ts içindeki tüm sabit yollar derleme sırasında hazır HTML'e çevrilir.
  prerender: true,
} satisfies Config;

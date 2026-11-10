import { type RouteConfig, index, route } from "@react-router/dev/routes";

// Her sayfa iki kez tanımlanır: Türkçe (ön eksiz) ve İngilizce ("/en" ön ekli).
// Aynı bileşen dosyası kullanılır; dil, adresten otomatik belirlenir.
export default [
  index("routes/home.tsx", { id: "home-tr" }),
  route("en", "routes/home.tsx", { id: "home-en" }),
] satisfies RouteConfig;

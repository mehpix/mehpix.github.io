import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    // tsconfig.json'daki "~/*" kısayolunu Vite'a da tanıtır.
    tsconfigPaths: true,
  },
});

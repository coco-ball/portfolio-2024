import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/",
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: "index.html",
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});

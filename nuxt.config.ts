// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr: false,
  imports: {
    dirs: ["node_modules"], // Scan for auto-imports in these directories
    scan: false, // Disable scanning for other directories
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/ui", "@nuxt/icon"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@nuxt/ui"],
    },
  },
  typescript: {
    strict: true,
  },
});

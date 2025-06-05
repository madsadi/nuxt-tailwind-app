// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/ui", "@nuxt/icon"],
  css: ["~/assets/css/main.css"],
  vite: {
    vue: {
      script: {
        propsDestructure: true,
      },
    },
  },
});

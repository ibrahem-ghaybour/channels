// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-03-09",
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss", "quill/dist/quill.snow.css"],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Inter: [400, 500, 700],
      Roboto: [400, 700],
    },
    display: "swap",
    preload: true,
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_GLOPAL_API_URL,
    },
  },
});
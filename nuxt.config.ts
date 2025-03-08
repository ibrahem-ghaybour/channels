// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app: {
  //   pageTransition: { name: "fade", mode: "out-in" },
  // },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],
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
// <font-awesome-icon :icon="['fab', 'rocketchat']" />
// npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/vue-fontawesome

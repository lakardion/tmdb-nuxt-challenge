// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    tmdbBaseUrl: process.env.NUXT_TMDB_URL,
    tmdbSecret: process.env.NUXT_TMDB_API_KEY,
  },
});

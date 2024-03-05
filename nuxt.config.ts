// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/global.css' // Path to your global CSS file
  ],
  modules: [
    '@unocss/nuxt',
  ],
})

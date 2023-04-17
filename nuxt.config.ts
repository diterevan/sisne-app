// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  devServer: {
    host: 'app.localhost',
    port: 3000,
  },
})

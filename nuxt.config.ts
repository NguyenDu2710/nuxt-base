export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  runtimeConfig: {
    apiSecret: '123456',
    jwtSecret: process.env.JWT_SECRET || 'secret-key',
    public: {
      apiBase: '/api'
    },
  },
  css: [
    '~/assets/css/main.scss',
  ],
  components: [
    '~/components',
  ],
  typescript: {
    strict: true,
    typeCheck: true,
    shim: false
  },
  devtools: { enabled: true },
})
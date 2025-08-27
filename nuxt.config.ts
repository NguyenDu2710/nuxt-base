export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  runtimeConfig: {
    apiSecret: '123456',
    jwtSecret: process.env.JWT_SECRET || 'secret-key',
    public: {
      apiBase: '/api'
    },
  },
  css: [
    '~/assets/css/main.scss',
    '~/assets/css/tailwind.scss'
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
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxt/image'],
  runtimeConfig: {
    apiSecret: '123456',
    public: {
      apiBase: '/api'
    },
  },
  css: [
    '~/css/main.css',
  ],
  components: [
    '~/components',
    '~/views'
  ],
  build: {
    transpile: ['@nuxtjs/composition-api', 'bootstrap-vue']
  },
  typescript: {
    strict: true,
    typeCheck: true,
    shim: false
  },
  devtools: { enabled: true },
  compatibilityDate: '2023-10-01',
  vite: {
    optimizeDeps: {
      include: ['@nuxtjs/composition-api', 'bootstrap-vue']
    }
  } 
})
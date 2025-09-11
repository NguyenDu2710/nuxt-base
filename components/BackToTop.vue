<template>
  <button
    aria-label="Back to top"
    @click="scrollTop"
    class="fixed bottom-6 right-6 z-40 rounded-full shadow-lg border border-white/60
           bg-slate-800/90 text-white p-3 transition-all duration-300
           hover:bg-slate-900 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/60
           backdrop-blur"
    :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'"
  >
    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M12 19V5" stroke-linecap="round"/>
      <path d="M6 11l6-6 6 6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const visible = ref(false)
const onScroll = () => { visible.value = window.scrollY > 400 }

onMounted(() => {
  visible.value = window.scrollY > 400
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>

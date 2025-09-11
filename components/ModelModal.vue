<!-- components/ModelModal.vue -->
<template>
  <transition name="fade">
    <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center">
      <!-- backdrop -->
      <div class="absolute inset-0 bg-black/60" @click="onClose" />
      <!-- dialog -->
      <div
        class="relative z-10 w-[92vw] max-w-5xl rounded-2xl bg-white shadow-xl dark:bg-neutral-900"
        role="dialog" aria-modal="true"
      >
        <div class="flex items-center justify-between px-4 py-3 border-b border-neutral-200 dark:border-neutral-800">
          <h3 class="text-lg font-semibold">{{ title }}</h3>
          <button
            class="rounded-full p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            @click="onClose" aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div class="p-2 sm:p-4">
          <ClientOnly>
            <!-- @google/model-viewer -->
            <model-viewer
              :src="`${base}models${src}`"
              :poster="poster"
              camera-controls
              auto-rotate
              ar
              touch-action="pan-y"
              style="width:100%;height:min(70vh,80dvh);background:#f7f7f7"
              exposure="1"
              shadow-intensity="0.7"
              alt="3D object viewer"
            ></model-viewer>
            <template #fallback>
              <div class="grid place-items-center h-[60vh] text-neutral-500">Đang tải viewer…</div>
            </template>
          </ClientOnly>
        </div>

        <div class="flex items-center justify-between gap-3 px-4 py-3 border-t border-neutral-200 dark:border-neutral-800">
          <span class="text-sm text-neutral-500 truncate">{{ tip }}</span>
          <button class="px-3 py-2 rounded-lg bg-neutral-900 text-white hover:opacity-90" @click="onClose">Đóng</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
const props = defineProps<{
  open: boolean
  tip?: string
  src: string
  title?: string
  poster?: string
}>()

const base = useRuntimeConfig().app.baseURL

const emit = defineEmits<{
  (e: 'close'): void
}>()

const onClose = () => emit('close')

// ESC để đóng
onMounted(() => {
  const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
  window.addEventListener('keydown', onKey)
  onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .15s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>

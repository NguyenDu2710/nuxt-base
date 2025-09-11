<!-- pages/index.vue -->
<template>
  <main class="min-h-dvh bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 border-t border-neutral-200 dark:border-neutral-800">
    <header class="px-4 sm:px-8 py-6">
      <h1 class="text-2xl sm:text-3xl font-bold">Bộ sưu tập mô hình 3D</h1>
      <p class="text-neutral-500 mt-1">Click vào thẻ để xem 360°</p>
    </header>

    <section class="px-4 sm:px-8 pb-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <article
          v-for="item in items"
          :key="`${base}models${item.src}`"
          class="group cursor-pointer rounded-2xl bg-white dark:bg-neutral-900 shadow hover:shadow-lg transition overflow-hidden"
          @click="open(item)"
        >
          <div class="relative aspect-video bg-neutral-100 dark:bg-neutral-800">
            <ClientOnly>
              <!-- model-viewer dưới dạng thumbnail (poster tự render) -->
              <model-viewer
                :src="`${base}models${item.src}`"
                :poster="item.poster || ''"
                camera-controls
                disable-zoom
                interaction-prompt="none"
                style="width:100%;height:100%;--poster-color: transparent;"
                exposure="0.9"
              ></model-viewer>
              <template #fallback>
                <div class="absolute inset-0 grid place-items-center text-neutral-400">Đang tải…</div>
              </template>
            </ClientOnly>

            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-3">
              <h3 class="text-white font-medium drop-shadow">{{ item.title }}</h3>
            </div>
          </div>
          <div class="px-4 py-3">
            <p class="text-sm text-neutral-500 line-clamp-2">{{ item.desc }}</p>
          </div>
        </article>
      </div>
    </section>

    <ModelModal
      :open="modal.open"
      :src="modal.src"
      :tip="modal.tip"
      :title="modal.title"
      :poster="modal.poster"
      @close="modal.open = false"
    />
  </main>
</template>

<script setup lang="ts">
import ModelModal from '~/components/ModelModal.vue'
const base = useRuntimeConfig().app.baseURL
type Item = {
  title: string
  desc: string
  src: string
  poster?: string
  tip?: string
}

const items = ref<Item[]>([
  {
    title: 'Trống đồng Đông Sơn – Việt Nam',
    desc: 'Mô hình văn hoá, có thể xoay 360° để quan sát chi tiết.',
    src: '/trong_ong_ong_son_-_viet_nam.glb',
    tip: 'Một nhạc cụ cổ truyền với hình dáng đặc trưng, được mô phỏng dưới dạng 3D.'
  },
  {
    title: 'Nón lá Việt Nam',
    desc: 'Biểu tượng văn hoá Việt – view 360°.',
    src: '/vietnamese___non_la.glb',
    tip: 'Chiếc nón hình chóp thanh thoát, thể hiện nét đẹp giản dị và truyền thống của người Việt.'
  },
  {
    title: 'Chùa Một Cột',
    desc: 'Di tích nổi tiếng ở Hà Nội – xoay để xem toàn cảnh.',
    src: '/chua_mot_cot.glb',
    tip: 'Ngôi chùa biểu tượng của Thăng Long – Hà Nội, được dựng giữa hồ Linh Chiểu.'
  },
  {
    title: 'Tượng Phật Nam – Chùa Som Rông (Sóc Trăng)',
    desc: 'Kiến trúc tôn giáo – xem 360° chi tiết.',
    src: '/tuong_phat_nam_-_chua_som_rong_soc_trang.glb',
    tip: 'Tượng Phật Nam khổng lồ tại Chùa Som Rông, thu hút khách hành hương và du lịch.'
  },
])

const modal = reactive<{ open: boolean; src: string; title: string; poster?: string, tip?: string }>({
  open: false,
  src: '',
  title: '',
  poster: undefined,
})

function open(item: Item) {
  modal.open = true
  modal.src = item.src
  modal.title = item.title
  modal.tip = item.tip
  modal.poster = item.poster
}
</script>

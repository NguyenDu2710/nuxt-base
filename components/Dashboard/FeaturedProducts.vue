<template>
  <div class="relative bg-gradient-to-b from-slate-100 via-slate-200 to-white">
    <section id="products" class="mx-auto w-10/12 max-w-screen-2xl px-4 pb-12 pt-10">
      <div class="mb-6 flex items-center justify-center">
        <h2 class="text-3xl font-semibold text-black-200">Sản phẩm nổi bật</h2>
      </div>

      <!-- ====== 3 TAB PRODUCTS (now Swiper-driven) ====== -->
      <div class="mb-12 relative">
        <!-- Tab headers -->
        <div class="flex justify-center gap-4 border-b border-slate-200">
          <button
            v-for="(p, idx) in products.slice(0, 3)"
            :key="p.id"
            @click="goToTab(idx)"
            :class="[
              'px-4 py-2 font-semibold transition',
              activeTab === idx ? 'border-b-2 border-sky-600 text-sky-600' : 'text-slate-500 hover:text-sky-600'
            ]"
          >
            {{ p.title }}
          </button>
        </div>

        <!-- Prev / Next buttons (wired to Swiper navigation) -->
        <button
          ref="prevEl"
          type="button"
          class="absolute top-1/2 z-10 -translate-y-1/2 bg-slate-300/80 hover:bg-white text-sky-700 rounded-full shadow p-2 transition disabled:opacity-40 left-0 [@media(min-width:1640px)]:-left-14"
          aria-label="Prev"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          ref="nextEl"
          type="button"
          class="absolute top-1/2 z-10 -translate-y-1/2 bg-slate-300/80 hover:bg-white text-sky-700 rounded-full shadow p-2 transition disabled:opacity-40 right-0 [@media(min-width:1640px)]:-right-14"
          aria-label="Next"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Swiper: slide = each tab content -->
        <Swiper
          ref="tabsSwiper"
          :modules="[Autoplay, Pagination, Navigation]"
          :loop="true"
          :navigation="false"
          :slides-per-view="1"
          :space-between="24"
          :autoplay="{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }"
          :pagination="{ clickable: true }"
          @slideChange="onSlideChange"
          @swiper="setSwiper"
          class="mt-8"
        >
          <SwiperSlide v-for="(p, idx) in products.slice(0, 3)" :key="p.id + '-slide'">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white shadow-xl p-6 md:p-10">
              <!-- Left: text -->
              <div class="space-y-5">
                <div class="inline-flex items-center gap-3">
                  <h3 class="text-2xl md:text-3xl font-extrabold text-slate-900">{{ p.title }}</h3>
                  <span
                    v-if="p.tag"
                    :class="['ml-auto inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold', tagColor(p.tag)]"
                  >
                    {{ p.tag }}
                  </span>
                </div>

                <p class="text-slate-700 text-base md:text-lg leading-relaxed">{{ p.subtitle }}</p>

                <div class="pt-2">
                  <NuxtLink v-if="p.link" target="_blank" :to="p.link" class="rounded-xl bg-sky-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-sky-700 transition">
                    Xem chi tiết
                  </NuxtLink>
                  <button v-else class="rounded-xl bg-sky-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-sky-700 transition">
                    Xem chi tiết
                  </button>
                </div>
              </div>

              <!-- Right: image + features -->
              <div class="grid grid-cols-1 gap-6">
                <div class="w-full h-72 sm:h-80 md:h-[380px] overflow-hidden ring-1 ring-slate-200 bg-gradient-to-br from-indigo-50 to-sky-50">
                  <img v-if="p.img" :src="`${base}images/products${p.img}`" :alt="p.title" class="w-full h-full object-cover" />
                  <div v-else class="w-full h-full flex items-center justify-center text-sm text-neutral-600">No image</div>
                </div>
                <ul v-if="p.bullets?.length" class="space-y-3">
                  <li v-for="f in p.bullets" :key="f" class="flex items-start gap-3 text-slate-700">
                    <svg class="mt-1 w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{{ f }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <!-- ===== Timeline: Sản phẩm khác ===== -->
    <section id="more-products" class="mx-auto w-10/12 max-w-screen-2xl px-4 pb-20">
      <div class="mb-12 flex items-center justify-center">
        <h2 class="text-3xl font-semibold text-black-200">Sản phẩm khác</h2>
      </div>

      <div class="relative grid grid-cols-1 md:grid-cols-2 gap-x-28">
        <!-- Center Line -->
        <div class="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-slate-300 transform -translate-x-1/2"></div>

        <!-- Left Column -->
        <div class="space-y-12">
          <div v-for="(p, i) in leftProducts" :key="p.id + '-left-' + i" class="relative">
            <div class="timeline-card md:text-right">
              <div class="flex flex-row-reverse md:flex-row items-start gap-2">
                <div class="w-32 h-24 md:w-60 md:h-52 overflow-hidden rounded-ss-lg rounded-ee-lg bg-slate-100 shadow-inner shrink-0 border-2 border-sky-200">
                  <img v-if="p.img" :src="`${base}images/products${p.img}`" :alt="p.title" class="w-full h-full object-cover" @click="open({ src: p.img, title: p.title })" />
                </div>
                <div class="flex-1">
                  <p class="text-xl font-bold text-slate-900">{{ p.title }}</p>
                  <p class="mt-2 text-base text-slate-600 leading-relaxed">{{ p.subtitle }}</p>
                  <ul class="mt-3 space-y-1.5 text-xs text-slate-500">
                      <li v-for="bullet in p.bullets" :key="bullet" class="flex items-center gap-2 md:justify-end">
                        <span>{{ bullet }}</span>
                        <svg class="flex w-3 h-3 text-sky-400 shrink-0 md:justify-end" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                      </li>
                  </ul>
                  <div class="mt-4 flex justify-end">
                    <button class="rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-50 transition">
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Marker -->
            <div class="absolute top-1/2 left-[-0.5rem] md:left-auto md:right-[-3.2rem] transform -translate-y-1/2 z-10">
              <div class="w-5 h-5 rounded-full bg-sky-600 border-4 border-white shadow-md"></div>
            </div>
          </div>
        </div>

        <!-- Right Column (staggered) -->
        <div class="space-y-12 md:mt-24">
          <div v-for="(p, i) in rightProducts" :key="p.id + '-right-' + i" class="relative">
            <div class="timeline-card">
              <div class="flex items-start gap-2">
                <div class="flex-1">
                  <p class="text-xl font-bold text-slate-900">{{ p.title }}</p>
                  <p class="mt-2 text-base text-slate-600 leading-relaxed">{{ p.subtitle }}</p>
                  <ul class="mt-3 space-y-1.5 text-xs text-slate-500">
                      <li v-for="bullet in p.bullets" :key="bullet" class="flex items-center gap-2">
                        <svg class="w-3 h-3 text-sky-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span>{{ bullet }}</span>
                      </li>
                  </ul>
                  <div class="mt-4 flex justify-start">
                    <button class="rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-50 transition">
                      Xem chi tiết
                    </button>
                  </div>
                </div>
                <div class="w-32 h-24 md:w-60 md:h-52 overflow-hidden rounded-ss-lg rounded-ee-lg bg-slate-100 shadow-inner shrink-0 border-2 border-sky-200">
                  <img v-if="p.img" :src="`${base}images/products${p.img}`" :alt="p.title" class="w-full h-full object-cover" @click="open({ src: p.img, title: p.title })"/>
                </div>
              </div>
            </div>
            <!-- Marker -->
            <div class="absolute top-1/2 left-[-0.5rem] md:left-[-3.2rem] transform -translate-y-1/2 z-10">
              <div class="w-5 h-5 rounded-full bg-sky-600 border-4 border-white shadow-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <ImageModal
      :open="modal.open"
      :src="modal.src"
      :tip="modal.tip"
      :title="modal.title"
      :poster="modal.poster"
      @close="modal.open = false"
    />
</template>

<script setup lang="ts">
import { toRefs, ref, onMounted, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import ImageModal from './ImageModal.vue'
const base = useRuntimeConfig().app.baseURL

export interface Product {
  id: string
  title: string
  tag: string
  subtitle: string
  bullets: string[]
  img?: string
  link?: string
}

const modal = reactive<{ open: boolean; src: string; title: string; poster?: string, tip?: string }>({
  open: false,
  src: '',
  title: '',
  poster: undefined,
})

function open(item: any) {
  modal.open = true
  modal.src = item.src
  modal.title = item.title
  modal.tip = item.tip
  modal.poster = item.poster
}

const props = defineProps<{ products: Product[] }>()
const { products } = toRefs(props)

// --- Swiper Logic ---
const activeTab = ref(0)
const tabsSwiper = ref<any>(null)
const swiperInstance = ref<any>(null)
const prevEl = ref<HTMLElement | null>(null)
const nextEl = ref<HTMLElement | null>(null)

function setSwiper(swiper: any) {
  swiperInstance.value = swiper
  if (prevEl.value && nextEl.value && swiperInstance.value) {
    swiperInstance.value.params.navigation.prevEl = prevEl.value
    swiperInstance.value.params.navigation.nextEl = nextEl.value
    if (swiperInstance.value.navigation) {
      swiperInstance.value.navigation.init()
      swiperInstance.value.navigation.update()
    }
  }
}

onMounted(() => {
  if (swiperInstance.value && prevEl.value && nextEl.value) {
    swiperInstance.value.params.navigation.prevEl = prevEl.value
    swiperInstance.value.params.navigation.nextEl = nextEl.value
    if (swiperInstance.value.navigation) {
      swiperInstance.value.navigation.init()
      swiperInstance.value.navigation.update()
    }
  }
})

function onSlideChange(swiper: any) {
  activeTab.value = swiper.realIndex
}

function goToTab(idx: number) {
  activeTab.value = idx
  const s = swiperInstance.value
  if (s && typeof s.slideToLoop === 'function') {
    s.slideToLoop(idx, 500, true)
  } else if (s && typeof s.slideTo === 'function') {
    s.slideTo(idx, 500, true)
  }
}

// --- Timeline Logic ---
const otherProducts = computed(() => props.products.slice(3));
const leftProducts = computed(() => otherProducts.value.filter((_, i) => i % 2 === 0));
const rightProducts = computed(() => otherProducts.value.filter((_, i) => i % 2 !== 0));


const tagColor = (tag: string) => {
  switch (tag) {
    case 'Web':
      return 'bg-sky-100 text-sky-700'
    case 'Mobile':
      return 'bg-green-100 text-green-700'
    case 'AI/EMBEDDED':
      return 'bg-purple-100 text-purple-700'
    case 'Security':
      return 'bg-red-100 text-red-700'
    case 'Research':
      return 'bg-yellow-100 text-yellow-700'
    default:
      return 'bg-neutral-100 text-neutral-800'
  }
}
</script>

<style scoped>
/* Timeline styles */
.timeline-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
  border: 1px solid rgba(226, 232, 240, 0.9);
  transition: transform 280ms ease, box-shadow 280ms ease;
}
.timeline-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
}

/* Mobile timeline layout */
@media (max-width: 767px) {
  #more-products .grid {
    grid-template-columns: 1fr;
  }
  #more-products .space-y-12 {
    margin-top: 0;
    padding-left: 1.5rem; /* Space for the line and markers */
  }
  #more-products .md\:mt-24 {
    margin-top: 3rem;
  }
  #more-products .relative .absolute.left-1\/2 {
    display: none; /* Hide desktop center line */
  }
  #more-products .relative::before {
    content: '';
    position: absolute;
    left: 0.5rem;
    top: 1rem;
    bottom: 1rem;
    width: 2px;
    background-color: #cbd5e1;
  }
}

/* subtle text shadow for headings on small screens */
.drop-shadow-sm { text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); }
</style>
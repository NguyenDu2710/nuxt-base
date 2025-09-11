<template>
  <div class="bg-gradient-to-b from-orange-100 via-slate-100 to-orange-100">
  <section id="partners" class="mx-auto max-w-screen-2xl px-4 pb-10">
    <h2 class="text-3xl font-semibold text-black-200 text-center py-5">Đối tác của chúng tôi</h2>
    <div class="relative">

      <Swiper
        :space-between="16"
        :breakpoints="{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 5 }
        }"
        class="overflow-visible"
        :loop="true"
        :modules="[Navigation, Autoplay]"
        :autoplay="{ delay: 1000, pauseOnMouseEnter: true }"
        :navigation="false"
        @swiper="onSwiper"
      >
        <SwiperSlide v-for="n in partners" :key="n.name">
          <div class="rounded-xl h-32 border border-white/30 bg-white/20 p-6 text-center text-sm text-amber-900 flex flex-row items-center justify-center">
            <img
              :src="`${base}images/partners/${n.img}`"
              :alt="n.name"
              class="max-h-full max-w-full object-contain h-full"
              style="width:auto;"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from "swiper/modules";
import 'swiper/css'
import "swiper/css/navigation"
const base = useRuntimeConfig().app.baseURL
const partners = [
  { name: 'BTC', img: 'btc.png' },
  { name: 'Hitachi', img: 'hitachi.png' },
  { name: 'Honki', img: 'Honki.png' },
  { name: 'IVS', img: 'ivs.png' },
  { name: 'JTS', img: 'jts.png' },
  { name: 'Kaima', img: 'kaima.png' },
  { name: 'Mitech', img: 'mitech.png' },
  { name: 'NCS', img: 'ncs.png' },
  { name: 'NEC', img: 'nec.svg' },
  { name: 'Shinmei', img: 'shinmei.svg' },
  { name: 'Ubicom', img: 'ubicom.png' },
  { name: 'Veriserve', img: 'veriserve.png' }
]

const prevEl = ref<HTMLElement | null>(null)
const nextEl = ref<HTMLElement | null>(null)
const onSwiper = (swiper: any) => {
  setTimeout(() => {
    if (prevEl.value && nextEl.value) {
      swiper.params.navigation.prevEl = prevEl.value
      swiper.params.navigation.nextEl = nextEl.value
      swiper.navigation.destroy()
      swiper.navigation.init()
      swiper.navigation.update()
    }
  })
}
</script>

<style scoped>
/* Add any additional styles here */
</style>
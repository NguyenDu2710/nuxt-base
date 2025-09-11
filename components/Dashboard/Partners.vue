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
              :src="n.img"
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

const partners = [
  { name: 'BTC', img: '/images/partners/btc.png' },
  { name: 'Hitachi', img: '/images/partners/hitachi.png' },
  { name: 'Honki', img: '/images/partners/Honki.png' },
  { name: 'IVS', img: '/images/partners/ivs.png' },
  { name: 'JTS', img: '/images/partners/jts.png' },
  { name: 'Kaima', img: '/images/partners/kaima.png' },
  { name: 'Mitech', img: '/images/partners/mitech.png' },
  { name: 'NCS', img: '/images/partners/ncs.png' },
  { name: 'NEC', img: '/images/partners/nec.svg' },
  { name: 'Shinmei', img: '/images/partners/shinmei.svg' },
  { name: 'Ubicom', img: '/images/partners/ubicom.png' },
  { name: 'Veriserve', img: '/images/partners/veriserve.png' }
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
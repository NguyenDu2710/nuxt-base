<template>
  <section class="relative w-full overflow-hidden border border-white/10 justify-center items-center flex h-1/2 md:h-[calc(100vh-60px)] lg:h-[calc(100vh-60px)]">
    <Swiper :modules="[Navigation, Autoplay, Pagination]" :loop="true" :slides-per-view="1" :autoplay="{ delay: 5000, pauseOnMouseEnter: true }"
      :breakpoints="{ 768: { slidesPerView: 1 } }" class="mx-auto w-full gap-10 px-4 py-12 h-full"
      :pagination="{ clickable: true }">
      <!-- Slide 1: original slide1 content -->
      <SwiperSlide>
        <div
          class="h-full slide1 mx-auto grid  grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16 bg-[url('/images/header1.png')] bg-cover bg-center">
          <div class="mx-auto pl-5 pr-20 md:pl-20 p-auto">
            <h1 class="text-3xl font-bold leading-tight md:text-6xl text-white">
              Viet Nam Hi-Tech Engineering Company
            </h1>
            <p class="mt-4 max-w-xl text-xl text-white font-sans">
              VHEC là công ty phát triển dựa trên sự đổi mới kỹ thuật với cam kết đem lại sự hài lòng cao nhất cho khách
              hàng.
            </p>
            <div class="mt-6 flex flex-wrap items-center gap-3">
              <button class="rounded-xl bg-black/10 px-4 py-2 text-sm hover:bg-black/20 text-amber-100">Xem sản phẩm
                →</button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <!-- Slide 2: header2 (background image / alternate) -->
      <SwiperSlide>
        <div
          class="h-full slide1 mx-auto grid  grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-16 bg-[url('/images/header2.png')] bg-cover bg-center">
          <div class="hidden md:inline-flex"></div>
          <div class="mx-auto pl-36 md:pl-20">
            <h1 class="text-3xl font-bold leading-tight md:text-6xl text-white">
              Đa dạng lĩnh vực, sản phẩm và dịch vụ
            </h1>
            <p class="mt-4 max-w-xl text-xl text-white font-sans">
              Giải pháp toàn diện từ phát triển phần mềm, tích hợp hệ thống, cung cấp nhân lực CNTT đến các dịch vụ công nghệ cao.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <!-- Slide 3: header2 (background image / alternate) -->
      <SwiperSlide>
        <div
          class="h-full slide1 mx-auto grid  grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16 bg-[url('/images/header3.png')] bg-cover bg-center">
          <div class="mx-auto pl-12 md:pl-20 px-5 py-14">
            <h1 class="text-3xl font-bold leading-tight md:text-6xl text-white">
              Nhiều đối tác tin cậy trong nước và số lượng lớn khách hàng Nhật Bản đầy tiềm năng 
            </h1>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination';

export interface Product {
  id: string
  title: string
  tag: string
  subtitle: string
  bullets: string[]
  img?: string
}
const props = defineProps<{ products?: Product[] }>()
const { products } = toRefs(props)

</script>
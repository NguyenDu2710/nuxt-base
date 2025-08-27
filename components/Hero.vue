<template>
  <section class="relative w-full overflow-hidden border-b border-white/10 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950">
    <div class="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
      <div>
        <h1 class="text-2xl font-bold leading-tight md:text-3xl">
          Các công nghệ sử dụng <br /> và sản phẩm của chúng tôi
        </h1>
        <p class="mt-4 max-w-xl text-sm text-neutral-300">
          Chúng tôi áp dụng các công nghệ nền tảng để phát triển những sản phẩm đổi mới và hữu ích cho khách hàng.
        </p>
        <div class="mt-6 flex flex-wrap items-center gap-3">
          <button class="rounded-xl bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100">Liên hệ</button>
          <button class="rounded-xl bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20">Xem sản phẩm →</button>
        </div>
      </div>
      <div class="relative">
        <div class="mx-auto h-48 w-72 rounded-2xl bg-gradient-to-br from-indigo-500/30 via-sky-500/30 to-purple-500/30 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_20px_80px_-20px_rgba(59,130,246,0.5)] md:h-56 md:w-96" />
        <div class="pointer-events-none absolute -right-6 -top-6 size-24 rounded-2xl bg-gradient-to-tr from-sky-500/40 to-indigo-500/40 blur-xl md:size-28" />
        <div class="pointer-events-none absolute -bottom-8 -left-8 size-20 rounded-2xl bg-gradient-to-tr from-purple-500/40 to-pink-500/40 blur-xl md:size-24" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
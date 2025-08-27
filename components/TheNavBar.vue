<template>
  <header class="sticky top-0 z-40 w-full border-b border-white/10 backdrop-blur bg-neutral-950/70">
    <div class="mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
      <div class="flex items-center gap-3">
        <div
          class="size-8 rounded-xl bg-gradient-to-br from-sky-500/80 via-indigo-500/80 to-purple-500/80 shadow-[0_0_40px_-12px_rgba(59,130,246,0.6)]" />
        <span class="text-sm font-semibold tracking-wide">IT COMPANY</span>
      </div>
      <nav class="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
        <a href="#tech" class="hover:text-white">Công nghệ sử dụng</a>
        <a href="#products" class="hover:text-white">Sản phẩm</a>
        <a href="#partners" class="hover:text-white">Case Study</a>
        <a href="#contact" class="hover:text-white">Liên hệ</a>
      </nav>
      <div class="flex items-center gap-2">
        <button class="hidden rounded-xl bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20 md:inline-flex">Liên
          hệ</button>
        <button class="md:hidden rounded-xl px-2 py-1.5 text-sm text-neutral-300 hover:bg-white/10">☰</button>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts"></script>
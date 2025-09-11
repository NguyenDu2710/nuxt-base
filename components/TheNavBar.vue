<template>
  <header class="sticky top-0 z-40 w-full border-b border-white/10 backdrop-blur bg-slate-50">
    <div class="mx-auto flex h-14 w-10/12 max-w-screen-2xl items-center justify-between px-4">
      <NuxtLink href="/" @click="scrollTop">
        <div class="flex items-center gap-3">
          <img src="/images/Logo2.png" alt="Logo" class="h-12 w-12" />
          <span class="text-2xl font-bold tracking-wide text-gray-700">VHEC</span>
        </div>
      </NuxtLink>
      <nav class="hidden items-center gap-6 text-base text-gray-700 md:flex font-medium">
        <a href="#tech" class="hover:text-gray-700">Công nghệ sử dụng</a>
        <a href="#products" class="hover:text-gray-700">Sản phẩm</a>
        <a href="#contact" class="hover:text-gray-700">Năng lực nhân sự</a>
      </nav>
      <div class="flex items-center gap-2">
        <a href="tel:+84943455215" class="hidden md:inline-flex items-center gap-2 text-neutral-200 hover:text-gray-700">
          <svg class="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.38 1.78.76 2.6a2 2 0 0 1-.45 2.11L9.7 9.7a16 16 0 0 0 6.6 6.6l1.27-1.27a2 2 0 0 1 2.11-.45c.82.38 1.7.64 2.6.76A2 2 0 0 1 22 16.92z" />
          </svg>
          <span class="text-sm font-medium text-gray-700">+84 9 4345 5215</span>
        </a>

        <a href="mailto:info@vhec.vn" class="hidden md:inline-flex items-center gap-2 text-neutral-200 hover:text-gray-700 mt-2 sm:mt-0">
          <svg class="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3 8.5v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" />
            <path d="M21 8.5l-9 6-9-6" stroke="currentColor" />
          </svg>
          <span class="text-sm font-medium text-gray-700">info@vhec.vn</span>
        </a>
        <header class="flex justify-end pl-4 py-2">
          <GoogleTranslate />
        </header>
        <button class="md:hidden rounded-xl px-2 py-1.5 text-sm text-amber-900 hover:bg-white/10">☰</button>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { GoogleTranslate } from '#components';

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>
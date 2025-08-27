<template>
    <div
        :class="['relative rounded-2xl border border-white/10 bg-white/5 p-4', highlight ? 'ring-1 ring-sky-400/30' : '']">
        <div class="flex items-center justify-between">
            <p class="text-base font-medium">{{ product.title }}</p>
            <span class="rounded-md border border-white/20 px-2 py-0.5 text-[10px] uppercase tracking-wide">{{
                product.tag }}</span>
        </div>
        <p class="mt-1 text-xs text-neutral-300">{{ product.subtitle }}</p>


        <div class="mb-4 mt-4 h-28 rounded-xl bg-gradient-to-br from-indigo-500/20 via-sky-500/20 to-purple-500/20" />


        <ul class="space-y-1 text-xs text-neutral-300">
            <li v-for="b in product.bullets" :key="b" class="flex items-center gap-2">
                <span class="inline-block size-1.5 rounded-full bg-neutral-300" /> {{ b }}
            </li>
        </ul>


        <div class="mt-4 flex items-center gap-2">
            <button
                class="rounded-xl bg-white px-3 py-1.5 text-sm font-medium text-neutral-900 hover:bg-neutral-100">Try
                now</button>
            <button class="rounded-xl bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20">Details →</button>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { Product } from './FeaturedProducts.vue'


interface Props { product: Product; highlight?: boolean }
const props = defineProps<Props>()
</script>
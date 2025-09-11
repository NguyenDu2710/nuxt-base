<script setup lang="ts">
// MotionKit.vue — reusable animation component using @vueuse/motion
// Modes: 'reveal' | 'stagger' | 'parallax'
// Requires: npm i @vueuse/motion @vueuse/core (core only for parallax scroll math)

import { ref, computed, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useScroll, useElementBounding, useWindowSize } from '@vueuse/core'

const props = withDefaults(defineProps<{
  mode: 'reveal' | 'stagger' | 'parallax'

  // common
  once?: boolean
  duration?: number // seconds
  easing?: string

  // reveal
  y?: number
  scale?: number
  delay?: number // seconds

  // stagger
  items?: any[]
  baseDelay?: number // seconds
  step?: number // seconds
  grid?: string // container classes
  grid2?: string // container classes

  // parallax
  heightVH?: number
  bgSrc?: string
  fgSrc?: string
  speedBack?: number
  speedMid?: number
  speedFront?: number
}>(), {
  once: true,
  duration: 0.45,
  easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
  y: 16,
  scale: 1.0,
  delay: 0,
  baseDelay: 0,
  step: 0.08,
  grid: 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3',
  heightVH: 140,
  speedBack: 60,
  speedMid: 120,
  speedFront: 200,
})

const root = ref<HTMLElement | null>(null)

// ===== helpers =====
function delayAt(i: number) {
  return  i * (props.step ?? 0.08)
}

// ===== PARALLAX (scroll-based) =====
const { height: winH } = useWindowSize()
const { top, height } = useElementBounding(root)
const { y } = useScroll(window)

const progress = computed(() => {
  if (props.mode !== 'parallax') return 0
  const start = top.value - winH.value
  const end = top.value + height.value
  const p = (y.value - start) / Math.max(1, end - start)
  return Math.max(0, Math.min(1, p))
})
const yBack  = computed(() => (progress.value - 0.5) * (props.speedBack  || 60))
const yMid   = computed(() => (progress.value - 0.5) * (props.speedMid   || 120))
const yFront = computed(() => (progress.value - 0.5) * (props.speedFront || 200))

onMounted(async () => { await nextTick() })
onBeforeUnmount(() => {})
</script>

<template>
  <!-- REVEAL -->
  <div v-if="mode === 'reveal'"
       ref="root"
       v-motion
       v-motion-visible="{ once: once }"
       :initial="{ opacity: 0, y: y, scale: 0.98 }"
       :enter="{ opacity: 1, y: 0, scale: scale, transition: { duration, ease: easing, delay } }">
    <slot />
  </div>

  <!-- STAGGER -->
  <div v-else-if="mode === 'stagger'" ref="root" :class="grid" v-motion-pop-visible>
    <template v-for="(it, i) in (items || [])" :key="(it && (it.id ?? it.key)) ?? i">
      <div v-motion :class="grid2"
           :initial="{ opacity: 0, y }"
           :enter="{ opacity: 1, y: 0, transition: { duration, ease: easing, delay: delayAt(i) } }">
        <slot name="item" :item="it" :index="i" />
      </div>
    </template>
  </div>

  <!-- PARALLAX -->
  <section v-else ref="root" class="relative overflow-hidden" :style="{ height: `${heightVH}vh` }">
    <!-- bg layer -->
    <img v-if="bgSrc" :src="bgSrc" alt=""
         class="pointer-events-none absolute inset-0 w-full h-full object-cover"
         :style="{ transform: `translate3d(0, ${yBack}px, 0)` }" />

    <!-- mid (content) -->
    <div class="relative z-10 grid place-items-center w-full h-full">
      <div v-motion :style="{ transform: `translate3d(0, ${yMid}px, 0)` }"
           :initial="{ opacity: 0, scale: 0.98 }"
           :visible="{ opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'ease-out' } }">
        <slot />
      </div>
    </div>

    <!-- fg layer -->
    <img v-if="fgSrc" :src="fgSrc" alt=""
         class="pointer-events-none absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[110%] max-w-none"
         :style="{ transform: `translate3d(0, ${yFront}px, 0)` }" />

    <!-- readability overlay -->
    <div class="pointer-events-none absolute inset-0" style="background: linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,.15))"></div>
  </section>
</template>

<style scoped>
:where(img){ backface-visibility: hidden; -webkit-font-smoothing: antialiased; }
</style>

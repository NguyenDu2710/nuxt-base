<template>
  <div>
    <TheNavBar />
    <!-- Main Content -->
    <main class="main-content">
      <NuxtPage />
    </main>
    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import TheNavBar from '@/components/TheNavBar.vue'
import TheFooter from '@/components/TheFooter.vue'

const dropdowns = ref({
  diemden: false,
  camnang: false,
  trienlam: false
})

function handleClickOutside(e) {
  const nav = document.querySelector('.main-nav')
  if (nav && !nav.contains(e.target)) {
    dropdowns.value.diemden = false
    dropdowns.value.camnang = false
    dropdowns.value.trienlam = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
</style>
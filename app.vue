<template>
  <div class="container">
    <TheNavBar />
    <!-- Main Content -->
    <main class="main-content">
      <TravelGuideView />
      <TopNewsView />
      <TravelTourView />
      <MapView />
      <VietNam />
    </main>
    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import TheNavBar from '@/components/TheNavBar.vue'
import TheFooter from '@/components/TheFooter.vue'
import TravelGuideView from '@/components/Travel_Guide/TravelGuideView.vue'
import TopNewsView from '@/components/Top_News/TopNewsView.vue'
import TravelTourView from '@/components/Travel_Tour/TravelTourView.vue'
import MapView from '@/components/Maps/MapView.vue'
import VietNam from '@/components/VietNam/VietNam.vue'

const dropdowns = ref({
  diemden: false,
  camnang: false,
  trienlam: false
})

function toggleDropdown(name) {
  for (const key in dropdowns.value) {
    dropdowns.value[key] = false
  }
  dropdowns.value[name] = true
}

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
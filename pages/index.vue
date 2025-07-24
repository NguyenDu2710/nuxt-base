<template>
  <Image360View />
  <div class="content">
    <TravelGuideView />
    <TopNewsView />
    <TravelTourView />
    <MapView />
    <VietNam />
  </div>
</template>
<script setup lang="ts">
import TravelGuideView from '@/components/Travel_Guide/TravelGuideView.vue'
import TopNewsView from '@/components/Top_News/TopNewsView.vue'
import TravelTourView from '@/components/Travel_Tour/TravelTourView.vue'
import MapView from '@/components/Maps/MapView.vue'
import VietNam from '@/components/VietNam/VietNam.vue'
</script>
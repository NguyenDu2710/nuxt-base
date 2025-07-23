<template>
  <div id="container"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

let viewer = null

onMounted(async () => {
  // Load THREE.js và Panolens qua CDN
  await loadScript('https://cdn.jsdelivr.net/npm/three@0.118.3/build/three.min.js')
  await loadScript('https://cdn.jsdelivr.net/npm/panolens@0.12.0/build/panolens.min.js')

  // eslint-disable-next-line no-undef
  const pano1 = new window.PANOLENS.ImagePanorama('/images/evening_museum_courtyard.jpg')
  // eslint-disable-next-line no-undef
  const pano2 = new window.PANOLENS.ImagePanorama('/images/warm_restaurant.jpg')

  // eslint-disable-next-line no-undef
  viewer = new window.PANOLENS.Viewer({
    container: document.querySelector("#container"),
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: true,
    viewIndicator: true
  })

  viewer.add(pano1, pano2)

  // Hotspot chuyển pano1 -> pano2
  // eslint-disable-next-line no-undef
  const linkHotspot = new window.PANOLENS.Infospot(300, window.PANOLENS.DataImage.Arrow)
  linkHotspot.position.set(3000, 0, 0)
  linkHotspot.addEventListener("click", () => {
    viewer.setPanorama(pano2)
  })
  pano1.add(linkHotspot)

  // Hotspot chuyển pano2 -> pano1
  // eslint-disable-next-line no-undef
  const linkHotspot2 = new window.PANOLENS.Infospot(300, window.PANOLENS.DataImage.Arrow)
  linkHotspot2.position.set(3000, 0, 0)
  linkHotspot2.addEventListener("click", () => {
    viewer.setPanorama(pano1)
  })
  pano2.add(linkHotspot2)
})

onBeforeUnmount(() => {
  // Xoá viewer nếu cần (tuỳ Panolens có hỗ trợ hay không)
  viewer = null
})

// Hàm tải script động
function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve()
    const script = document.createElement('script')
    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}
</script>
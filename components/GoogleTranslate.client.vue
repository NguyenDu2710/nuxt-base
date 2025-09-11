<template>
  <div class="inline-flex items-center gap-2">
    <!-- Nút cờ Anh -->
    <button class="notranslate inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/80
             px-3 py-2 shadow hover:shadow-md transition active:scale-[0.98] backdrop-blur"
      aria-label="Translate to English" @click="translateToEN('en')">
      <!-- UK flag SVG nhỏ gọn -->
      <svg class="w-5 h-5" viewBox="0 0 60 30" aria-hidden="true">
        <clipPath id="s">
          <path d="M0,0 v30 h60 v-30 z" />
        </clipPath>
        <clipPath id="t">
          <path d="M30,15 h30 v15 z v-30 z h-30 z h-30 z v30 z h30 z" />
        </clipPath>
        <g clip-path="url(#s)">
          <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="4" clip-path="url(#t)" />
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6" />
        </g>
      </svg>
    </button>
    <button class="notranslate inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/80
             px-3 py-2 shadow hover:shadow-md transition active:scale-[0.98] backdrop-blur"
      aria-label="Translate to English" @click="translateToEN('ja')">
      <!-- UK flag SVG nhỏ gọn -->
      <div class="inline-flex border border-slate-300 rounded-sm p-[1px] bg-white">
        <svg class="w-6 h-4" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Japan flag">
          <rect width="60" height="40" fill="#ffffff" />
          <circle cx="30" cy="20" r="12" fill="#BC002D" />
        </svg>
      </div>
    </button>

    <!-- Widget Google (ẩn) -->
    <div id="google_translate_element" class="hidden"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

/** nạp script Google Translate một lần */
const ensureGTranslate = () => new Promise<void>((resolve) => {
  const w = window as any
  if (w.__gtReady) return resolve()
  if (document.getElementById('gt-script')) return (w.__gtOnReadyQueue ??= []).push(resolve)

  w.googleTranslateElementInit = () => {
    // @ts-ignore
    new (w.google.translate.TranslateElement)(
      {
        pageLanguage: 'vi',
        includedLanguages: 'en,ja',
        autoDisplay: false
      },
      'google_translate_element'
    )
    w.__gtReady = true
      ; (w.__gtOnReadyQueue ?? []).forEach((fn: any) => fn())
    w.__gtOnReadyQueue = []
    resolve()
  }

  const s = document.createElement('script')
  s.id = 'gt-script'
  s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
  document.head.appendChild(s)
})

/** đặt cookie googtrans để buộc dịch */
function setGTCookies(path: string) {
  const d = location.hostname.split('.')
  const domains = [
    location.hostname,                      // subdomain hiện tại
    d.length > 1 ? `.${d.slice(-2).join('.')}` : '' // domain gốc (nếu có)
  ].filter(Boolean)

  domains.forEach(domain => {
    document.cookie = `googtrans=${path}; path=/; domain=${domain}; max-age=31536000`
    document.cookie = `googtrans=${path}; path=/; max-age=31536000`
  })
}

/** hành động khi bấm cờ */
const translateToEN = async (lang: any) => {
  await ensureGTranslate()

  // ưu tiên: tìm select .goog-te-combo và đổi value
  const combo = document.querySelector<HTMLSelectElement>('.goog-te-combo')
  if (combo) {
    combo.value = lang
    combo.dispatchEvent(new Event('change'))
    return
  }

  // fallback: đặt cookie rồi reload (Google script sẽ đọc cookie và tự dịch)
  setGTCookies('/vi/en/jp')
  location.reload()
}

onMounted(() => {
  ensureGTranslate()

  // Ẩn banner Google (tránh đẩy layout xuống)
  const style = document.createElement('style')
  style.innerHTML = `
    .goog-te-banner-frame { display:none !important; }
    body { top: 0 !important; }
  `
  document.head.appendChild(style)
})
</script>

<style scoped>
/* tránh Google dịch nút cờ */
.notranslate {
  translate: none;
}
</style>

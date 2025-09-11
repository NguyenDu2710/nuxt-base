<template>
  <footer class="mt-0 border-t border-white/10 py-10 bg-[url('/images/background.svg')] bg-cover bg-center">
    <div class="mx-auto max-w-screen-2xl px-4 text-sm text-neutral-400">
      <!-- header with title + contact (not only at top of list) -->
      <div class="mb-6 flex gap-4 sm:flex-row justify-center items-center flex-row">
        <div class="flex flex-col sm:flex-row sm:items-center sm:gap-4">
          <a href="tel:+84943455215" class="flex items-center gap-2 text-neutral-200 hover:text-white">
            <svg class="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.38 1.78.76 2.6a2 2 0 0 1-.45 2.11L9.7 9.7a16 16 0 0 0 6.6 6.6l1.27-1.27a2 2 0 0 1 2.11-.45c.82.38 1.7.64 2.6.76A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span class="text-xl font-medium">+84 9 4345 5215</span>
          </a>

          <a href="mailto:info@vhec.vn" class="flex items-center gap-2 text-neutral-200 hover:text-white mt-2 sm:mt-0">
            <svg class="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M3 8.5v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor"/>
              <path d="M21 8.5l-9 6-9-6" stroke="currentColor"/>
            </svg>
            <span class="text-xl font-medium">info@vhec.vn</span>
          </a>
        </div>
      </div>

      <!-- locations grid -->
      <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <!-- Hà Nội (Head Office) -->
        <a class="flex gap-3 items-start rounded-lg bg-white/5 p-3 hover:bg-white/10">
          <img src="/images/address/Hanoi_thumb.jpg" alt="Hanoi" class="h-20 w-20 rounded-md object-cover flex-shrink-0" />
          <div>
            <div class="font-medium text-neutral-100 text-base">Trụ sở Hà Nội</div>
            <div class="text-xs text-neutral-300 mt-1">
              Tầng 23, tòa nhà văn phòng Viwaseen,<br />
              Số 48 Tố Hữu, phường Trung Văn, quận Nam Từ Liêm,<br />
              Hà Nội, Việt Nam
            </div>
          </div>
        </a>

        <!-- Tokyo (Sales Office) -->
        <a class="flex gap-3 items-start rounded-lg bg-white/5 p-3 hover:bg-white/10">
          <img src="/images/address/Tokyo_thumb.jpg" alt="Tokyo" class="h-20 w-20 rounded-md object-cover flex-shrink-0" />
          <div>
            <div class="font-medium text-neutral-100 text-base">Phòng kinh doanh Tokyo</div>
            <div class="text-xs text-neutral-300 mt-1">
              162-0844 DS Ichigayahachiman 3rd floor,<br />
              2-1 Ichigayahachiman-cho, Shinjuku-ku, Tokyo<br />
              (Individual System JSC — đại diện/đối tác)
            </div>
          </div>
        </a>

        <!-- Shiga (Branch) -->
        <a class="flex gap-3 items-start rounded-lg bg-white/5 p-3 hover:bg-white/10">
          <img src="/images/address/Shiga_thumb.png" alt="Shiga" class="h-20 w-20 rounded-md object-cover flex-shrink-0" />
          <div>
            <div class="font-medium text-neutral-100 text-base">Chi nhánh Shiga (JP)</div>
            <div class="text-xs text-neutral-300 mt-1">
              〒520-0047 Shiga, Otsu, Hamaotsu,<br />
              4 Chome−2−15 SS, Floor 4<br />
              (Công ty TNHH VHEC Nhật Bản / HONKI — đối tác)
            </div>
          </div>
        </a>

        <!-- Cần Thơ (Branch) -->
        <a class="flex gap-3 items-start rounded-lg bg-white/5 p-3 hover:bg-white/10">
          <img src="/images/address/Cantho_thumb.jpg" alt="Cantho" class="h-20 w-20 rounded-md object-cover flex-shrink-0" />
          <div>
            <div class="font-medium text-neutral-100 text-base">Chi nhánh Cần Thơ</div>
            <div class="text-xs text-neutral-300 mt-1">
              Số 69 Lý Thái Tổ, phường Hưng Phú,<br />
              Quận Cái Răng, Thành phố Cần Thơ,<br />
              Việt Nam
            </div>
          </div>
        </a>

        <!-- Nha Trang (Branch) -->
        <a class="flex gap-3 items-start rounded-lg bg-white/5 p-3 hover:bg-white/10">
          <img src="/images/address/Nhatrang_thumb.png" alt="Nha Trang" class="h-20 w-20 rounded-md object-cover flex-shrink-0" />
          <div>
            <div class="font-medium text-neutral-100 text-base">Chi nhánh Nha Trang</div>
            <div class="text-xs text-neutral-300 mt-1">
              Tầng 4, Công viên phần mềm Quân đội,<br />
              Số 75 đường 2/4, phường Vĩnh Hòa,<br />
              Thành phố Nha Trang, Khánh Hòa, Việt Nam
            </div>
          </div>
        </a>
      </div>

      <!-- contact row (duplicate contact area at bottom for visibility) -->
      <div class="mt-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div class="text-xs text-neutral-400">
          © {{ new Date().getFullYear() }} VHEC. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
/* no custom styles required — Tailwind utility classes used */
</style>
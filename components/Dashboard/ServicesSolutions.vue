<template>
  <section class="pt-12 mx-auto max-w-screen-2xl px-4 pb-10">
    <!-- Dịch vụ & Giải pháp công nghệ -->
    <div class="mb-12">
      <header class="mb-8 text-center">
        <h2 class="text-3xl font-semibold text-black-200">
          Dịch vụ & Giải pháp công nghệ
        </h2>
        <p class="mt-2 text-base text-slate-600">Tư vấn – Thiết kế – Phát triển – Vận hành</p>
      </header>

      <div
        class="relative flex flex-col lg:flex-row items-center justify-center min-h-[750px] lg:min-h-[560px] gap-8 lg:gap-0 my-8">
        <!-- Central Background Image -->
        <div class="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          <img src="/images/bulb.png" alt="Core Services Idea"
               class="w-auto h-full max-h-96 opacity-20 lg:opacity-100" />
        </div>

        <!-- Service & Solution Cards (gộp chung) -->
        <div
          v-for="item in merged"
          :key="item.title"
          class="relative z-20 w-full max-w-sm lg:max-w-xs lg:absolute hover:z-30"
          :class="item.position"
        >
          <div class="service-card group">
            <div class="service-icon mr-4" :class="item.icon.color">
              <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                   v-html="item.icon.path"></svg>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-slate-800">{{ item.title }}</h3>
              <p
                class="text-sm text-slate-600 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-1 transition-all duration-300 ease-in-out overflow-hidden">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

/** 1) Các dịch vụ cốt lõi cũ */
const services = ref([
  {
    title: 'Phát triển phần mềm',
    description: 'Giải pháp đa dạng từ Cloud, Web, Mobile đến Trí tuệ nhân tạo.',
    icon: {
      path: '<rect x="3" y="5" width="18" height="14" rx="2" /><path d="M8 9h8M8 13h4" stroke-linecap="round" />',
      color: 'bg-sky-100 text-sky-600'
    },
    position: 'lg:top-[15%] lg:left-[20%]'
  },
  {
    title: 'Kiểm thử & QA',
    description: 'Đảm bảo chất lượng, hiệu suất và an toàn cho sản phẩm của bạn.',
    icon: {
      path: '<circle cx="12" cy="12" r="9" /><path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round" />',
      color: 'bg-amber-100 text-amber-600'
    },
    position: 'lg:top-[15%] lg:right-[20%]'
  },
  {
    title: 'Tư vấn & Hạ tầng',
    description: 'Thiết kế, triển khai và vận hành hạ tầng mạng chuyên nghiệp, an toàn.',
    icon: {
      path: '<path d="M4 17v-2a4 4 0 014-4h8a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" />',
      color: 'bg-emerald-100 text-emerald-600'
    },
    position: 'lg:top-[42%] lg:left-[12%] lg:-translate-y-1/2'
  },
  {
    title: 'Hệ thống quản lý',
    description: 'Tối ưu hóa vận hành doanh nghiệp với hệ thống quản lý hiệu quả.',
    icon: {
      path: '<path d="M9 17v-2a4 4 0 014-4h4a4 4 0 014 4v2" /><path d="M3 11v6a2 2 0 002 2h14a2 2 0 002-2v-6" /><path d="M12 11V3M9 6l3-3 3 3" />',
      color: 'bg-indigo-100 text-indigo-600'
    },
    position: 'lg:top-[42%] lg:right-[12%] lg:-translate-y-1/2'
  },
  {
    title: 'Mobile App',
    description: 'Xây dựng ứng dụng di động hiệu suất cao trên nền tảng iOS và Android.',
    icon: {
      path: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><path d="M12 18h.01" />',
      color: 'bg-rose-100 text-rose-600'
    },
    position: 'lg:bottom-[15%] lg:left-[20%]'
  },
  {
    title: 'App Cloud',
    description: 'Phát triển và vận hành ứng dụng trên nền tảng điện toán đám mây.',
    icon: {
      path: '<path d="M18 10h-1.26A8 8 0 104 16.25" /><path d="M18 10a6 6 0 01-12 0" /><path d="M12 2v2m-4.95 1.95l1.41 1.41M2 12h2m1.95 4.95l1.41-1.41" />',
      color: 'bg-purple-100 text-purple-600'
    },
    position: 'lg:bottom-[15%] lg:right-[20%]'
  }
])

/** 2) Gộp “Giải pháp công nghệ” thành thẻ cùng nhóm */
const solutions = ref([
  {
    title: 'ERP',
    description: 'Kế toán – Sản xuất – Kho – Nhân sự – CRM – Chi nhánh tùy biến theo yêu cầu.',
    icon: {
      path: '<path d="M3 9l9-4 9 4v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M9 22V12h6v10"/>',
      color: 'bg-indigo-100 text-indigo-600'
    },
    position: 'lg:top-[-2%] lg:left-1/2 lg:-translate-x-1/2'
  },
  {
    title: 'SCOM (Vận hành)',
    description: 'Quản lý công việc, nhân sự, công số, tài chính; báo cáo realtime.',
    icon: {
      path: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
      color: 'bg-cyan-100 text-cyan-600'
    },
    position: 'lg:bottom-[-2%] lg:left-1/2 lg:-translate-x-1/2'
  },
  {
    title: 'Hệ thống giáo dục',
    description: 'Quản lý học sinh – giáo viên, thông báo điện tử, học & thi trực tuyến (LMS).',
    icon: {
      path: '<path d="M12 2l9 5-9 5-9-5 9-5z"/><path d="M3 9v4c0 3 4 5 9 5s9-2 9-5V9"/>',
      color: 'bg-pink-100 text-pink-600'
    },
    position: 'lg:top-[60%] lg:left-[12%] lg:-translate-y-1/2'
  },
  {
    title: 'Cyber Security',
    description: 'Skynet: pentest tự động; Oblivion: thu thập dữ liệu đa nền tảng.',
    icon: {
      path: '<path d="M12 2l7 4v5c0 5-3.6 9-7 11-3.4-2-7-6-7-11V6l7-4z"/><path d="M9 12l2 2 4-4"/>',
      color: 'bg-red-100 text-red-600'
    },
    position: 'lg:top-[60%] lg:right-[12%] lg:-translate-y-1/2'
  }
])

/** 3) Mảng đã gộp để render một lần */
const merged = computed(() => [...services.value, ...solutions.value])
</script>

<style scoped>
.service-card {
  @apply rounded-2xl flex items-center border border-slate-200/80 bg-white/80 backdrop-blur-sm p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-slate-300 hover:-translate-y-1;
}
.service-icon {
  @apply w-12 h-12 rounded-full flex items-center justify-center ring-4 ring-white shrink-0;
}
</style>

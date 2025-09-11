<template>
  <div class="bg-white" id="contact">
    <section class="mx-auto w-10/12 max-w-screen-2xl pb-10 pt-10 px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch ">
        <!-- LEFT: Image -->
        <div class="rounded-2xl overflow-hidden bg-white shadow-sm">
          <img
            src="/images/hr.png"
            alt="HR team"
            class="w-full h-full min-h-[320px] object-cover"
          />
        </div>

        <!-- RIGHT: 4 icon + text blocks stacked -->
        <div class="flex flex-col gap-0">
          <div v-for="(s, idx) in sections" :key="idx"
            class="p-2 flex items-center gap-5">
            <!-- Icon circle -->
            <div class="size-10 shrink-0 rounded-full bg-sky-600  flex items-center justify-center">
              <!-- Graduation Cap -->
              <svg v-if="s.icon === 'cap'" viewBox="0 0 24 24" class="size-6" fill="none" stroke="currentColor"
                stroke-width="1.5">
                <path d="M2 7.5L12 3l10 4.5-10 4.5L2 7.5z" fill="#fff" stroke="#fff" />
                <path d="M6 10.5v4.5c0 2 2.7 3 6 3s6-1 6-3v-4.5" stroke="#fff" />
                <path d="M18 17.5v2" stroke="#fff" />
                <circle cx="18" cy="20" r="0.7" fill="#fff" />
              </svg>
              <!-- User (single person) -->
              <svg v-else-if="s.icon === 'human'" viewBox="0 0 24 24" class="size-6" fill="none" stroke="currentColor"
                stroke-width="1.5">
                <circle cx="12" cy="9" r="4" fill="#fff" stroke="#fff" />
                <path d="M4 20c0-3.5 3.5-6 8-6s8 2.5 8 6" stroke="#fff" fill="none" />
              </svg>
              <!-- Setting (cog/gear) -->
              <svg v-else-if="s.icon === 'setting'" viewBox="0 0 24 24" class="size-6" fill="none" stroke="currentColor"
                stroke-width="1.5">
                <circle cx="12" cy="12" r="3.5" fill="#fff" stroke="#fff" />
                <circle cx="12" cy="12" r="3" stroke="#fff" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 
                          1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 
                          1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 
                          1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 
                          1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 
                          1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09c0 
                          .66.39 1.26 1 1.51.43.18.91.18 1.34 0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 
                          1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09c0 .66.39 1.26 
                          1 1.51.43.18.91.18 1.34 0H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 
                          1z" stroke="#fff" />
              </svg>
              <!-- Globe/Language / wrench as fallback -->
              <svg v-else viewBox="0 0 24 24" class="size-6" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="9" fill="#fff" stroke="#fff" />
                <ellipse cx="12" cy="12" rx="4" ry="9" stroke="#38bdf8" fill="none" />
                <path d="M3 12h18" stroke="#38bdf8" />
                <path d="M12 3a9 9 0 0 1 0 18" stroke="#38bdf8" />
              </svg>
            </div>

            <!-- Text -->
            <div class="flex-1">
              <h3 class="font-semibold text-lg mb-1 font-medium">
                {{ s.title }}
              </h3>
              <ul class="space-y-1.5 text-amber-900 text-base leading-relaxed font-medium">
                <li v-for="p in s.points" :key="p" class="flex gap-2">
                  <svg class="mt-1 size-4 text-sky-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.5 16.5l-4-4 1.4-1.4 2.6 2.6 7.6-7.6 1.4 1.4-9 9z" />
                  </svg>
                  <span>{{ p }}</span>
                </li>
              </ul>
            </div>

            <!-- Percent -->
            <div class="text-sky-400 text-4xl md:text-5xl font-bold text-right min-w-[90px]">
              {{ s.percent }}<span class="text-sky-300 text-2xl">%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
type Section = {
  title: string
  points: string[]
  percent: number
  icon: 'cap' | 'human' | 'setting' | 'wrench'
}

const sections: Section[] = [
  {
    title: 'Trình độ đại học',
    points: [
      'Hơn 100 kỹ sư trình độ đại học chuyên ngành CNTT',
      '10 Thạc sĩ',
      '2 Tiến sĩ về AI làm cố vấn'
    ],
    percent: 99,
    icon: 'cap'
  },
  {
    title: 'Đa dạng về nhân sự',
    points: [
      'BrSE, BA',
      'Developer (web, app, AI...)',
      'Tester',
      'Supporter...'
    ],
    percent: 99,
    icon: 'human'
  },
  {
    title: 'Đa dạng về kỹ thuật',
    points: [
      'Lập trình thiết kế hệ thống Web',
      'Lập trình thiết kế hệ thống Mobile App',
      'Lập trình thiết kế hệ thống Nhúng',
      'Lập trình thiết kế hệ thống về AI...'
    ],
    percent: 99,
    icon: 'setting'
  },
  {
    title: 'Đa dạng về ngôn ngữ',
    points: [
      '90% nhân sự biết tiếng Anh',
      '50% nhân sự biết tiếng Nhật...'
    ],
    percent: 90,
    icon: 'wrench'
  }
]
</script>
<template>
  <div class="relative">
    <!-- Overlay image with high transparency so gradient color shows through -->
    <div class="opacity-30 bg-[url('/images/background.jpg')] h-full w-full absolute top-0 left-0 bg-cover"></div>
    <section id="tech" class="opacity-100 relative z-10 mx-auto w-10/12 max-w-screen-2xl px-4 pb-10 pt-10">
      <div class="mb-4 text-center">
        <h1 class="text-3xl font-semibold text-black-200">Công nghệ sử dụng</h1>
        <p class="mt-1 text-lg text-slate-800">Các nhóm công nghệ chính trong hệ thống của chúng tôi</p>
      </div>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="g in groups" :key="g.title" class="rounded-2xl border border-white/100 bg-white/50 shadow-2xl">
          <div class="px-5 pb-2 pt-4">
            <p class="text-base font-medium">{{ g.title }}</p>
          </div>
          <div class="flex flex-wrap gap-2 p-2 pt-0">
            <span v-for="it in g.items" :key="it.label"
              class="inline-flex flex-col items-center justify-center gap-0 rounded-lg bg-black/20 px-4 py-3 text-center hover:bg-black/30 transition-all">
              <img class="size-6 sm:size-8 lg:size-10 object-contain" :src="`${base}images/logos${it.icon}`" :alt="it.label" />
              <span class="text-sm sm:text-sm leading-tight">{{ it.label }}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
interface TechItem { label: string; icon: string }
interface TechGroup { title: string; items: TechItem[] }

const base = useRuntimeConfig().app.baseURL
const groups: TechGroup[] = [
  {
    title: 'Languages & Frameworks',
    items: [
      { label: 'C#/.NET', icon: '/csharp_dotnet.svg' },
      { label: 'C/C++', icon: '/cplusplus.svg' },
      { label: 'Java', icon: '/java.svg' },
      { label: 'PHP', icon: '/php.svg' },
      { label: 'Python', icon: '/python.svg' },
      { label: 'Visual Basic', icon: '/vbnet.svg' },
      { label: 'Node.js', icon: '/nodejs.svg' },
      { label: 'Angular', icon: '/angular.svg' },
      { label: 'React', icon: '/react.svg' },
      { label: 'Vue.js', icon: '/vue.svg' },
      { label: 'Flutter', icon: '/flutter.svg' },
      { label: 'Kotlin', icon: '/kotlin.svg' },
      { label: 'Dart', icon: '/dart.svg' }
    ]
  },
  {
    title: 'Database',
    items: [
      { label: 'SQL Server', icon: '/sqlserver.svg' },
      { label: 'Oracle', icon: '/oracle.svg' },
      { label: 'SQLite', icon: '/sqlite.svg' },
      { label: 'MySQL', icon: '/mysql.svg' },
      { label: 'PostgreSQL', icon: '/postgresql.svg' },
      { label: 'MongoDB', icon: '/mongodb.svg' },
      { label: 'Redis', icon: '/redis.svg' }
    ]
  },
  {
    title: 'Operating System',
    items: [
      { label: 'iOS', icon: '/ios.svg' },
      { label: 'Android', icon: '/android.svg' },
      { label: 'Windows', icon: '/windows.svg' },
      { label: 'Linux', icon: '/linux.svg' }
    ]
  },
  {
    title: 'Cloud',
    items: [
      { label: 'AWS', icon: '/Amazon_logo.svg' },
      { label: 'Azure', icon: '/azure.svg' },
      { label: 'Google Cloud', icon: '/googlecloud.svg' }
    ]
  },
  {
    title: 'DevOps/Infra',
    items: [
      { label: 'Docker', icon: '/docker.svg' },
      { label: 'Kubernetes', icon: '/kubernetes.svg' },
      { label: 'Jenkins (CI/CD)', icon: '/jenkins.svg' },
      { label: 'Nginx', icon: '/nginx.svg' },
      { label: 'IIS', icon: '/microsoft-iis.png' }
    ]
  },
  {
    title: 'Tools',
    items: [
      { label: 'GitHub', icon: '/github.svg' },
      { label: 'GitLab', icon: '/gitlab.svg' },
      { label: 'Jira', icon: '/jira.svg' },
      { label: 'Postman', icon: '/postman.svg' },
      { label: 'Figma', icon: '/figma.svg' },
      { label: 'ESLint', icon: '/eslint.svg' }
    ]
  }
]


</script>
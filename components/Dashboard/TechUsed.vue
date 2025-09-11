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
              <img class="size-6 sm:size-8 lg:size-10 object-contain" :src="it.icon" :alt="it.label" />
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


const groups: TechGroup[] = [
  {
    title: 'Languages & Frameworks',
    items: [
      { label: 'C#/.NET', icon: '/images/logos/csharp_dotnet.svg' },
      { label: 'C/C++', icon: '/images/logos/cplusplus.svg' },
      { label: 'Java', icon: '/images/logos/java.svg' },
      { label: 'PHP', icon: '/images/logos/php.svg' },
      { label: 'Python', icon: '/images/logos/python.svg' },
      { label: 'Visual Basic', icon: '/images/logos/vbnet.svg' },
      { label: 'Node.js', icon: '/images/logos/nodejs.svg' },
      { label: 'Angular', icon: '/images/logos/angular.svg' },
      { label: 'React', icon: '/images/logos/react.svg' },
      { label: 'Vue.js', icon: '/images/logos/vue.svg' },
      { label: 'Flutter', icon: '/images/logos/flutter.svg' },
      { label: 'Kotlin', icon: '/images/logos/kotlin.svg' },
      { label: 'Dart', icon: '/images/logos/dart.svg' }
    ]
  },
  {
    title: 'Database',
    items: [
      { label: 'SQL Server', icon: '/images/logos/sqlserver.svg' },
      { label: 'Oracle', icon: '/images/logos/oracle.svg' },
      { label: 'SQLite', icon: '/images/logos/sqlite.svg' },
      { label: 'MySQL', icon: '/images/logos/mysql.svg' },
      { label: 'PostgreSQL', icon: '/images/logos/postgresql.svg' },
      { label: 'MongoDB', icon: '/images/logos/mongodb.svg' },
      { label: 'Redis', icon: '/images/logos/redis.svg' }
    ]
  },
  {
    title: 'Operating System',
    items: [
      { label: 'iOS', icon: '/images/logos/ios.svg' },
      { label: 'Android', icon: '/images/logos/android.svg' },
      { label: 'Windows', icon: '/images/logos/windows.svg' },
      { label: 'Linux', icon: '/images/logos/linux.svg' }
    ]
  },
  {
    title: 'Cloud',
    items: [
      { label: 'AWS', icon: '/images/logos/Amazon_logo.svg' },
      { label: 'Azure', icon: '/images/logos/azure.svg' },
      { label: 'Google Cloud', icon: '/images/logos/googlecloud.svg' }
    ]
  },
  {
    title: 'DevOps/Infra',
    items: [
      { label: 'Docker', icon: '/images/logos/docker.svg' },
      { label: 'Kubernetes', icon: '/images/logos/kubernetes.svg' },
      { label: 'Jenkins (CI/CD)', icon: '/images/logos/jenkins.svg' },
      { label: 'Nginx', icon: '/images/logos/nginx.svg' },
      { label: 'IIS', icon: '/images/logos/microsoft-iis.png' }
    ]
  },
  {
    title: 'Tools',
    items: [
      { label: 'GitHub', icon: '/images/logos/github.svg' },
      { label: 'GitLab', icon: '/images/logos/gitlab.svg' },
      { label: 'Jira', icon: '/images/logos/jira.svg' },
      { label: 'Postman', icon: '/images/logos/postman.svg' },
      { label: 'Figma', icon: '/images/logos/figma.svg' },
      { label: 'ESLint', icon: '/images/logos/eslint.svg' }
    ]
  }
]


</script>
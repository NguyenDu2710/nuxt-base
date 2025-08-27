<template>
    <section id="tech" class="pt-12">
        <div class="mb-4 text-center">
            <h2 class="text-lg font-semibold">Technologies Used</h2>
            <p class="mt-1 text-sm text-neutral-300">Các nhóm công nghệ chính trong hệ thống của chúng tôi</p>
        </div>


        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div v-for="g in groups" :key="g.title" class="rounded-2xl border border-white/10 bg-white/5">
                <div class="px-5 pb-2 pt-4">
                    <p class="text-base font-medium">{{ g.title }}</p>
                    <p class="text-xs text-neutral-300">Stack tiêu biểu</p>
                </div>
                <div class="flex flex-wrap gap-2 p-5 pt-0">
                    <span v-for="it in g.items" :key="it.label"
                        class="inline-flex items-center gap-2 rounded-lg bg-white/10 px-2 py-1 text-xs text-white hover:bg-white/20">
                        <span class="grid size-5 place-items-center rounded-md bg-white/10">{{ it.icon }}</span>
                        {{ it.label }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
interface TechItem { label: string; icon: string }
interface TechGroup { title: string; items: TechItem[] }


const groups: TechGroup[] = [
    {
        title: 'Frontend', items: [
            { label: 'ReactJS', icon: '⚛️' },
            { label: 'Next.js', icon: '🚀' },
            { label: 'Tailwind CSS', icon: '💨' }
        ]
    },
    {
        title: 'Backend', items: [
            { label: 'Node.js', icon: '🟢' },
            { label: 'Express', icon: '🧭' },
            { label: 'NestJS', icon: '🧱' }
        ]
    },
    {
        title: 'Database', items: [
            { label: 'PostgreSQL', icon: '🐘' },
            { label: 'Redis', icon: '🧠' },
            { label: 'MongoDB', icon: '🍃' }
        ]
    },
    {
        title: 'Cloud', items: [
            { label: 'AWS', icon: '☁️' },
            { label: 'GCP', icon: '☁️' },
            { label: 'Vercel', icon: '▲' }
        ]
    },
    {
        title: 'DevOps/Infra', items: [
            { label: 'Docker', icon: '🐳' },
            { label: 'Kubernetes', icon: '☸️' },
            { label: 'CI/CD', icon: '🔁' }
        ]
    },
    {
        title: 'Tools', items: [
            { label: 'GitHub', icon: '🐙' },
            { label: 'Jest', icon: '🧪' },
            { label: 'ESLint', icon: '🧹' }
        ]
    }
]
</script>
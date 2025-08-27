<template>
    <section id="products" class="pt-12">
        <div class="mb-4 flex items-center justify-between">
            <h2 class="text-lg font-semibold">Featured Products</h2>
            <div class="flex items-center gap-2">
                <div class="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2 py-1 sm:flex">
                    <span class="text-xs opacity-70">🔎</span>
                    <input class="h-7 bg-transparent text-sm outline-none" placeholder="Tìm sản phẩm" />
                </div>
                <button
                    class="rounded-xl border border-white/10 px-3 py-1.5 text-sm text-neutral-200 hover:bg-white/10">⎈
                    All</button>
            </div>
        </div>


        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <ProductCard v-for="(p, i) in products" :key="p.id" :product="p" :highlight="i === 0" />
        </div>
    </section>
</template>
<script setup lang="ts">
import ProductCard from './ProductCard.vue'


export interface Product {
    id: string
    title: string
    tag: string
    subtitle: string
    bullets: string[]
}


const products: Product[] = [
    { id: 'vision360', title: 'Vision 360', tag: 'feature product', subtitle: 'AI-powered analytics platform', bullets: ['Real-time insights', 'Multi-source ingestion'] },
    { id: 'analytics', title: 'Analytics Tool', tag: 'Insights', subtitle: 'Analytics Tool & Insights', bullets: ['Dashboards', 'Reporting'] },
    { id: 'datastream', title: 'Data Stream', tag: 'Pipeline', subtitle: 'Real-time Data Pipeline', bullets: ['ETL', 'Low-latency'] },
]
</script>
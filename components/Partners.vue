<template>
    <section id="partners" class="pt-12">
        <h2 class="mb-6 text-center text-lg font-semibold">Our Partners</h2>
        <div class="grid grid-cols-2 gap-6 text-center text-sm text-neutral-300 sm:grid-cols-4">
            <div v-for="n in names" :key="n" class="rounded-xl border border-white/10 bg-white/5 p-6">
                <div class="mx-auto mb-2 size-10 rounded-full bg-white/10" />
                <p>{{ n }}</p>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
const names = ['COMPANY A', 'COMPANY B', 'COMPANY C', 'COMPANY D']
</script>
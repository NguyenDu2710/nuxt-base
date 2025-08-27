<template>
    <section id="contact" class="pt-12">
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div class="rounded-2xl border border-white/10 bg-white/5 lg:col-span-2">
                <div class="px-5 pb-2 pt-4">
                    <p class="text-base font-medium">CASE STUDIES</p>
                    <p class="text-xs text-neutral-300">Một vài minh chứng thực tế</p>
                </div>
                <div class="grid grid-cols-1 gap-4 p-5 md:grid-cols-2">
                    <div v-for="i in 4" :key="i" class="rounded-xl border border-white/10 bg-white/5 p-4">
                        <h4 class="text-sm font-medium">Tiêu đề nghiên cứu {{ i }}</h4>
                        <p class="mt-1 line-clamp-2 text-xs text-neutral-300">Mô tả ngắn gọn về vấn đề, giải pháp và tác
                            động đạt được.</p>
                        <a href="#" class="mt-2 inline-block text-sm text-sky-400">Xem chi tiết</a>
                    </div>
                </div>
            </div>


            <div class="rounded-2xl border border-white/10 bg-white/5">
                <div class="px-5 pb-2 pt-4">
                    <p class="text-base font-medium">Liên hệ</p>
                    <p class="text-xs text-neutral-300">Chúng tôi sẽ phản hồi sớm nhất</p>
                </div>
                <div class="space-y-3 p-5">
                    <input placeholder="Họ và tên" class="w-full rounded-xl bg-white/5 px-3 py-2 outline-none" />
                    <input placeholder="Email" class="w-full rounded-xl bg-white/5 px-3 py-2 outline-none" />
                    <textarea rows="3" placeholder="Nội dung"
                        class="w-full rounded-xl bg-white/5 px-3 py-2 outline-none"></textarea>
                    <button
                        class="w-full rounded-xl bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100">Gửi</button>
                    <div class="h-px bg-white/10" />
                    <p class="text-xs text-neutral-400">Hoặc gửi email tới <a class="underline decoration-dotted"
                            href="mailto:hello@example.com">hello@example.com</a></p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts"></script>
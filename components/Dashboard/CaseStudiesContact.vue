<template>
    <section id="contact" class="mx-auto max-w-screen-2xl px-4 pb-10">
        <div class="flex flex-col gap-4 items-center">
            <div class="rounded-2xl border border-black/60 bg-black/10 lg:w-1/2">
                <div class="px-5 pb-2 pt-4">
                    <p class="text-base font-medium ">Liên hệ</p>
                    <p class="text-xs text-amber-900">Chúng tôi sẽ phản hồi sớm nhất</p>
                </div>
                <div class="space-y-3 p-5">
                    <input placeholder="Họ và tên" class="w-full rounded-xl bg-white/50 px-3 py-2 outline-none" />
                    <input placeholder="Email" class="w-full rounded-xl bg-white/50 px-3 py-2 outline-none" />
                    <textarea rows="3" placeholder="Nội dung"
                        class="w-full rounded-xl bg-white/50 px-3 py-2 outline-none"></textarea>
                    <button
                        class="w-full rounded-xl bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100">Gửi</button>
                    <div class="h-px bg-black/10" />
                    <p class="text-xs text-amber-900">Hoặc gửi email tới <a class="underline decoration-dotted"
                            href="mailto:hello@example.com">info@vhec.vn</a></p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts"></script>
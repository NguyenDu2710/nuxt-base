<template>
  <footer class="mt-12 border-t border-white/10 bg-neutral-950/80 py-10">
    <div class="mx-auto max-w-screen-2xl px-4 text-sm text-neutral-400">
      <div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p>© {{ new Date().getFullYear() }} IT COMPANY. All rights reserved.</p>
        <div class="flex gap-6">
          <a class="hover:text-white" href="#">Privacy</a>
          <a class="hover:text-white" href="#">Terms</a>
          <a class="hover:text-white" href="#">Security</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts"></script>
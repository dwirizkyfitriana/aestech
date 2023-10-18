<script setup lang="ts">
import InputPrefix from '../atoms/InputPrefix.vue'
</script>

<template>
  <div class="bg-white w-full rounded-2xl p-8 flex flex-col gap-6 shadow-lg">
    <h1 class="font-bold text-xl mb-4">Social Media</h1>
    <div class="grid grid-cols-3 items-center">
      <h1 class="font-bold">Facebook</h1>
      <InputPrefix prefix="facebook.com/" placeholder="Username Facebook" />
    </div>
    <div class="grid grid-cols-3 items-center">
      <h1 class="font-bold">Twitter</h1>
      <InputPrefix prefix="twitter.com/" placeholder="Username Twitter" />
    </div>
    <div class="grid grid-cols-3 items-center">
      <h1 class="font-bold">Instagram</h1>
      <InputPrefix prefix="instagram.com/" placeholder="Username Instagram" />
    </div>
  </div>
</template>

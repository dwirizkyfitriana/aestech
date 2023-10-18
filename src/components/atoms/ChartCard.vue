<script setup lang="ts">
type Props = {
  icon: string
  total: number
  label: string
}

defineProps<Props>()
</script>

<template>
  <div class="w-1/4 bg-white shadow-lg p-9 rounded-3xl">
    <div
      class="w-[72px] h-[72px] bg-orange-16% text-orange flex justify-center items-center rounded-xl"
    >
      <svg-icon type="mdi" :path="icon" />
    </div>
    <h1 class="text-6xl font-extrabold mt-4">{{ total }}</h1>
    <p class="text-sm mt-2">{{ label }}</p>
  </div>
</template>

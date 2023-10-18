<script setup lang="ts">
import BoxIcon from './BoxIcon.vue'

type Props = {
  icon: string
  total: number
  label: string
}

defineProps<Props>()
</script>

<template>
  <div class="w-1/4 bg-white shadow-lg p-9 rounded-3xl">
    <BoxIcon :icon="icon" />
    <h1 class="text-6xl font-extrabold mt-4">{{ total }}</h1>
    <p class="text-sm mt-2">{{ label }}</p>
  </div>
</template>

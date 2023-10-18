<script setup lang="ts">
import ProgressBar from '../atoms/ProgressBar.vue'

type Props = {
  label: string
  progress: number
}

defineProps<Props>()
</script>

<template>
  <div>
    <div class="flex items-center justify-between">
      <p class="text-base">{{ label }}</p>
      <p>{{ progress }}%</p>
    </div>
    <ProgressBar :progress="progress" />
  </div>
</template>

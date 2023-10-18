<script setup lang="ts">
type Props = {
  label: string
  value: string
}

defineProps<Props>()
</script>

<template>
  <div class="grid grid-cols-3 items-center">
    <h1 class="font-bold">{{ label }}</h1>
    <p class="col-span-2">{{ value }}</p>
  </div>
</template>

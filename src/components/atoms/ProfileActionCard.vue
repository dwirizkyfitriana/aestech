<script setup lang="ts">
import { mdiChevronRight } from '@mdi/js'

type Props = {
  label: string
}

defineProps<Props>()
</script>

<template>
  <div role="button" class="bg-white w-full rounded-2xl p-8 flex justify-between shadow-lg">
    <h1 class="font-bold text-xl">{{ label }}</h1>
    <svg-icon class="w-9 h-9" type="mdi" :path="mdiChevronRight" />
  </div>
</template>

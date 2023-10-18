<script setup lang="ts">
import { mdiStar, mdiStarOutline } from '@mdi/js'

type Props = {
  rate: number
  label?: string
}

defineProps<Props>()
</script>

<template>
  <div>
    <h1>{{ label }}</h1>
    <div class="flex justify-between mt-2 text-orange">
      <svg-icon v-for="i in 5" :key="i" type="mdi" :path="rate >= i ? mdiStar : mdiStarOutline" />
      <p class="text-black">{{ rate }}.0</p>
    </div>
  </div>
</template>

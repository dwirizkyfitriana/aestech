<script setup lang="ts">
type Props = {
  progress: number
}

defineProps<Props>()
</script>

<template>
  <div class="w-full bg-grey-50 h-2 rounded-full">
    <div class="bg-orange h-2 rounded-full" :style="`width: ${progress}%`">&nbsp;</div>
  </div>
</template>

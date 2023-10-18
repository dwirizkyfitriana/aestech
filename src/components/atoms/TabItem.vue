<script setup lang="ts">
type Props = {
  label: string
  icon: string
}

defineProps<Props>()
</script>

<template>
  <div
    role="button"
    class="flex items-center gap-2 border-b-2 pb-4 font-bold text-xl text-grey-50 tab-item-transition"
  >
    <svg-icon type="mdi" :path="icon" />
    <h1>{{ label }}</h1>
  </div>
</template>

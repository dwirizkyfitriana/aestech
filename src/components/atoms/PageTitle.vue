<script setup lang="ts">
type Props = {
  title: string
  subtitle: string
}

defineProps<Props>()
</script>

<template>
  <h1 class="font-bold text-3xl">{{ title }}</h1>
  <p>{{ subtitle }}</p>
</template>

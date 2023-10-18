<script setup lang="ts">
type Props = {
  prefix: string
  placeholder: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex col-span-2">
    <span
      class="inline-flex items-center px-3 text-sm text-grey-50 bg-light-grey border border-r-0 border-gray-300 rounded-l-md min-w-[120px]"
    >
      {{ prefix }}
    </span>
    <input
      type="text"
      class="rounded-none rounded-r-lg bg-transparent border text-grey-50 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
      :placeholder="placeholder"
    />
  </div>
</template>

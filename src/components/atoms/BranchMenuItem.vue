<script setup lang="ts">
import type { Branch } from '@/@types/branch'
import { MenuItem } from '@headlessui/vue'

type Props = {
  branch: Branch
}

defineProps<Props>()
</script>

<template>
  <MenuItem v-slot="{ active }">
    <button
      :class="[
        active ? 'text-orange' : 'text-gray-900',
        'group flex w-full items-center rounded-md py-2 text-sm'
      ]"
    >
      {{ branch.name }}
    </button>
  </MenuItem>
</template>

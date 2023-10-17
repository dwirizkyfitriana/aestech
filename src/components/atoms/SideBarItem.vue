<script setup lang="ts">
import type { SideBarItem } from '@/@types/sidebar'
import { mdiChevronDown, mdiChevronRight } from '@mdi/js'

type Props = {
  item: SideBarItem
  isOpen: boolean
  isChevron: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="flex items-center justify-between cursor-pointer">
    <div class="flex gap-4">
      <svg-icon type="mdi" :path="item.icon" />
      <h1>{{ item.label }}</h1>
    </div>
    <svg-icon v-if="isChevron" type="mdi" :path="isOpen ? mdiChevronDown : mdiChevronRight" />
  </div>
</template>

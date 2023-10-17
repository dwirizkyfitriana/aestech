<script setup lang="ts">
import type { SideBarItem as TSideBarItem } from '@/@types/sidebar'
import SideBarItem from '../atoms/SideBarItem.vue'
import { ref } from 'vue'

type Props = {
  item: TSideBarItem
  isOpen: boolean
  isChevron: boolean
  stack?: number
  active?: boolean
}

defineProps<Props>()

const isOpenChild = ref<number>()
</script>

<template>
  <div class="space-y-3">
    <SideBarItem
      :item="item"
      :is-open="isOpen"
      :is-chevron="isChevron"
      :class="{ 'text-orange': active }"
    />

    <div class="ml-3 space-y-3" v-if="isOpen && item.children?.length" @click.stop="">
      <SideBarAction
        v-for="(child, index) in item.children"
        :class="{
          'font-normal': typeof stack === 'number' && stack > 2,
          'font-semibold': typeof stack === 'number' && stack === 2
        }"
        :key="index"
        :item="child"
        :is-open="isOpenChild === index"
        :active="isOpenChild === index"
        :is-chevron="Boolean(child.children && child.children.length > 0)"
        :stack="3"
        @click="isOpenChild === index ? (isOpenChild = undefined) : (isOpenChild = index)"
      />
    </div>
  </div>
</template>

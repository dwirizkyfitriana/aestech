<script setup lang="ts">
import sidebar from '@/constants/sidebar'

import { ref } from 'vue'
import SideBarAction from '../molecules/SideBarAction.vue';

const isOpen = ref<number>()
</script>

<template>
  <div class="bg-primary text-white flex flex-col items-center pb-12">
    <div class="flex px-6 py-12 gap-4 justify-center items-center mb-12">
      <img class="h-4/5" src="@/assets/images/logo.svg" alt="" />
      <img src="@/assets/images/logo-name.svg" alt="" />
    </div>

    <div class="w-4/5 text-base font-bold space-y-8">
      <SideBarAction
        v-for="(item, index) in sidebar"
        :key="index"
        :item="item"
        :is-open="isOpen === index"
        :is-chevron="Boolean(item.children && item.children.length > 0)"
        :stack="2"
        @click="isOpen === index ? (isOpen = undefined) : (isOpen = index)"
      />
    </div>
  </div>
</template>

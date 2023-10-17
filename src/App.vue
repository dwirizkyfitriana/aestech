<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from './components/organism/SideBar.vue'
</script>

<template>
  <div class="grid grid-cols-[290px_1fr] h-screen w-screen">
    <SideBar />
    <div class="relative">
      <RouterView />
    </div>
  </div>
</template>

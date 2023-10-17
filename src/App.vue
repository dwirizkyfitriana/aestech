<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from './components/organism/SideBar.vue'
import NavBar from './components/organism/NavBar.vue'
</script>

<template>
  <div class="grid grid-cols-[290px_1fr] h-screen w-screen">
    <SideBar />
    <div class="relative bg-light-grey">
      <NavBar />
      <div class="h-full max-h-[calc(100vh-110px)] overflow-x-hidden py-8 px-12 m-auto">
        <RouterView />
      </div>
    </div>
  </div>
</template>

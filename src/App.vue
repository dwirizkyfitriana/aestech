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
      <div class="w-[90%] py-8 m-auto">
        <RouterView />
      </div>
    </div>
  </div>
</template>

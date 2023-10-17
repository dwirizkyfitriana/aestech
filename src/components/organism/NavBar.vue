<script setup lang="ts">
import { mdiHelpCircle } from '@mdi/js'
import BranchMenu from '../molecules/BranchMenu.vue'
import NotificationModal from '../molecules/NotificationModal.vue'
import AvatarMenu from '../molecules/AvatarMenu.vue'
</script>

<template>
  <div class="w-full flex justify-between items-center bg-white text-black py-4 px-8 shadow-lg">
    <BranchMenu />

    <div class="flex gap-4 items-center">
      <NotificationModal />
      <svg-icon type="mdi" :path="mdiHelpCircle" />
      <div class="flex items-center gap-4">
        <AvatarMenu />
        <div>
          <h1 class="text-black font-bold text-xl">BagasBayu</h1>
          <p class="text-black">Manajer</p>
        </div>
      </div>
    </div>
  </div>
</template>

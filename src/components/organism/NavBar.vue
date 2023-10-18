<script setup lang="ts">
import { mdiHelpCircle } from '@mdi/js'
import BranchMenu from '../molecules/BranchMenu.vue'
import NotificationModal from '../molecules/NotificationModal.vue'
import AvatarMenu from '../molecules/AvatarMenu.vue'
import { useUserStore } from '@/stores/user'
import { onMounted } from 'vue'

const userStore = useUserStore()

const truncateString = (inputString: string) =>
  inputString.trim().split(/\s+/).slice(0, 2).join(' ')

onMounted(async () => {
  if (!userStore.user) await userStore.getUser()
})
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
          <h1 class="text-black font-bold text-xl">
            {{ userStore.user && truncateString(userStore.user?.fullname) }}
          </h1>
          <p class="text-black">{{ userStore.user?.position }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

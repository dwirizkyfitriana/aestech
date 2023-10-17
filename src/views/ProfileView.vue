<script setup lang="ts">
import PageTitle from '@/components/atoms/PageTitle.vue'
import { useUserStore } from '@/stores/user'
import { mdiFacebook, mdiInstagram, mdiTwitter } from '@mdi/js'
import { onMounted } from 'vue'

const userStore = useUserStore()

onMounted(async () => {
  await userStore.getUser()
})
</script>

<template>
  <PageTitle title="Profile Akun" subtitle="Lihat profil dan kelola data akun" />

  <div class="grid grid-cols-[445px_1fr] items-center mt-12">
    <div class="bg-white w-[445px] rounded-2xl p-12 flex flex-col items-center">
      <img class="rounded-xl" :src="userStore.user?.avatar" alt="" />
      <h1 class="font-bold text-2xl mt-4">{{ userStore.user?.fullname }}</h1>
      <p>{{ userStore.user?.position }}</p>

      <div class="flex gap-3 items-center text-grey-75 mt-6">
        <a :href="userStore.user?.social_media[0].instagram" target="_blank"
          ><svg-icon role="button" type="mdi" :path="mdiInstagram"
        /></a>
        <a :href="userStore.user?.social_media[0].twitter" target="_blank"
          ><svg-icon role="button" type="mdi" :path="mdiTwitter"
        /></a>
        <a :href="userStore.user?.social_media[0].facebook" target="_blank"
          ><svg-icon role="button" type="mdi" :path="mdiFacebook"
        /></a>
      </div>
      <h1 class="font-bold text-2xl mt-4">{{ userStore.user?.branch.name }}</h1>
      <p>{{ userStore.user?.branch.address }}</p>
    </div>
    <div></div>
  </div>
</template>

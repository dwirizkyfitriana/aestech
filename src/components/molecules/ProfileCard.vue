<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { mdiFacebook, mdiInstagram, mdiTwitter } from '@mdi/js'
import ProfileCardSkeleton from '../atoms/ProfileCardSkeleton.vue'

const userStore = useUserStore()
</script>

<template>
  <ProfileCardSkeleton v-if="!userStore.user" />
  <div
    v-else
    class="bg-white w-full rounded-2xl p-12 flex flex-col items-center text-center gap-12 shadow-lg"
  >
    <img class="rounded-xl" :src="userStore.user?.avatar" alt="" />
    <div>
      <h1 class="font-bold text-lg xl:text-2xl">{{ userStore.user?.fullname }}</h1>
      <p>{{ userStore.user?.position }}</p>
    </div>

    <div class="flex gap-3 items-center text-grey-75">
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

    <div>
      <h1 class="font-bold text-2xl">{{ userStore.user?.branch.name }}</h1>
      <p>{{ userStore.user?.branch.address }}</p>
    </div>
  </div>
</template>

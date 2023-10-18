<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import CardSkeleton from '../atoms/CardSkeleton.vue'

const userStore = useUserStore()
</script>
<template>
  <CardSkeleton v-if="!userStore.user" />
  <div v-else class="bg-white w-full rounded-2xl p-12 flex flex-col gap-2 shadow-lg">
    <div class="grid grid-cols-3 items-center">
      <h1 class="font-bold">No. Telepon</h1>
      <input
        class="col-span-2 w-full bg-transparent border border-grey-50 rounded-[4px] py-2 px-4"
        type="text"
        placeholder="08732671180"
      />
    </div>
    <div class="grid grid-cols-3 items-center">
      <h1 class="font-bold">E-mail</h1>
      <input
        class="col-span-2 w-full bg-transparent border border-grey-50 rounded-[4px] py-2 px-4"
        type="text"
        placeholder="june@gmail.com"
      />
    </div>
    <div class="grid grid-cols-3 items-center">
      <h1 class="font-bold">Alamat</h1>
      <textarea
        class="col-span-2 w-full bg-transparent border border-grey-50 rounded-[4px] py-2 px-4 resize-none"
        type="text"
        placeholder="Alamat"
      ></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import ProfileInfoCardItem from '../atoms/ProfileInfoCardItem.vue'
import CardSkeleton from '../atoms/CardSkeleton.vue'

const userStore = useUserStore()
</script>

<template>
  <CardSkeleton v-if="!userStore.user" />
  <div v-else class="bg-white w-full rounded-2xl p-12 flex flex-col gap-2 shadow-lg">
    <ProfileInfoCardItem label="ID Pegawai" :value="userStore.user.id" />
    <ProfileInfoCardItem label="Nama Pegawai" :value="userStore.user.fullname" />
    <ProfileInfoCardItem
      label="Jenis Kelamin"
      :value="userStore.user.gender === 'L' ? 'Laki-laki' : 'Perempuan'"
    />
    <ProfileInfoCardItem label="Tanggal Lahir" :value="userStore.user.date_of_birth" />
    <ProfileInfoCardItem label="Posisi" :value="userStore.user.position" />
    <ProfileInfoCardItem label="Klinik Cabang" :value="userStore.user.branch.name" />
  </div>
</template>

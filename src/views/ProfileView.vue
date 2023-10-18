<script setup lang="ts">
import PageTitle from '@/components/atoms/PageTitle.vue'
import ProfileActionCard from '@/components/atoms/ProfileActionCard.vue'
import TabItem from '@/components/atoms/TabItem.vue'
import ProfileCard from '@/components/molecules/ProfileCard.vue'
import ProfileInfoCard from '@/components/molecules/ProfileInfoCard.vue'
import ProfileInputCard from '@/components/molecules/ProfileInputCard.vue'
import ProfileSocialCard from '@/components/molecules/ProfileSocialCard.vue'
import { useUserStore } from '@/stores/user'
import { mdiClipboardSearchOutline, mdiCog } from '@mdi/js'
import { onMounted, ref } from 'vue'

const userStore = useUserStore()

const tab = ref<'info' | 'setting'>('info')

onMounted(async () => {
  await userStore.getUser()
})
</script>

<template>
  <PageTitle title="Profile Akun" subtitle="Lihat profil dan kelola data akun" />

  <div class="grid grid-cols-3 gap-3 mt-12">
    <div></div>
    <div class="grid grid-cols-2 col-span-2">
      <TabItem
        :class="{ 'text-orange border-b-orange': tab === 'info' }"
        label="Informasi Pribadi"
        :icon="mdiClipboardSearchOutline"
        @click="tab = 'info'"
      />
      <TabItem
        :class="{ 'text-orange border-b-orange': tab === 'setting' }"
        label="Pengaturan Akun"
        :icon="mdiCog"
        @click="tab = 'setting'"
      />
    </div>
  </div>

  <div class="grid grid-cols-3 gap-3 mt-6">
    <ProfileCard />
    <transition name="fade" mode="out-in">
      <div class="space-y-3 col-span-2" v-if="tab === 'info'">
        <ProfileInfoCard />
        <ProfileInputCard />
      </div>
      <div class="space-y-3 col-span-2" v-else>
        <ProfileActionCard label="Ubah Kode Akses" />
        <ProfileActionCard label="Ubah Password" />

        <ProfileSocialCard />
      </div>
    </transition>
  </div>
</template>

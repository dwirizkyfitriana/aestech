<script setup lang="ts">
import PageTitle from '@/components/atoms/PageTitle.vue'
import ProfileActionCard from '@/components/atoms/ProfileActionCard.vue'
import SaveButton from '@/components/atoms/SaveButton.vue'
import TabItem from '@/components/atoms/TabItem.vue'
import ProfileCard from '@/components/molecules/ProfileCard.vue'
import ProfileInfoCard from '@/components/molecules/ProfileInfoCard.vue'
import ProfileInputCard from '@/components/molecules/ProfileInputCard.vue'
import ProfileSocialCard from '@/components/molecules/ProfileSocialCard.vue'
import ModalChangePassword from '@/components/organism/ModalChangePassword.vue'
import { useUserStore } from '@/stores/user'
import { mdiClipboardSearchOutline, mdiCog } from '@mdi/js'
import { onMounted, ref } from 'vue'

const userStore = useUserStore()

const tab = ref<'info' | 'setting'>('info')
const isACModalOpen = ref(false)
const isPwModalOpen = ref(false)

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
        <ProfileActionCard label="Ubah Kode Akses" @click="isACModalOpen = true" />
        <ProfileActionCard label="Ubah Password" @click="isPwModalOpen = true" />
        <ModalChangePassword
          title="Ubah Kode Akses"
          label1="Kode Akses Sebelumnya"
          label2="Kode Akses Baru"
          :is-open="isACModalOpen"
          @close="isACModalOpen = false"
        />
        <ModalChangePassword
          title="Ubah Password"
          label1="Password Sebelumnya"
          label2="Password Baru"
          :is-open="isPwModalOpen"
          @close="isPwModalOpen = false"
        />

        <ProfileSocialCard />
      </div>
    </transition>
  </div>

  <div class="grid grid-cols-3 gap-3 mt-8">
    <div></div>
    <div class="col-span-2 m-auto">
      <SaveButton />
    </div>
  </div>
</template>

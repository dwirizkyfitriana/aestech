<script setup lang="ts">
import type { NotificationItem as TNotificationItem } from '@/@types/notification'
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
import { mdiBell } from '@mdi/js'
import NotificationItem from '../atoms/NotificationItem.vue'

const dummyNotif: TNotificationItem[] = [
  {
    title: 'Pembayaran berhasil!',
    subtitle: 'Lorem ipsum dolor sit amet',
    date: new Date().toISOString()
  },
  {
    title: 'Aktivasi Akun Berhasil',
    subtitle: 'Lorem ipsum dolor sit amet',
    date: new Date().toISOString()
  },
  {
    title: 'Akun anda akan Kadaluarsa',
    subtitle: 'Lorem ipsum dolor sit amet',
    date: new Date().toISOString()
  }
]
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton class="mt-1">
      <svg-icon type="mdi" :path="mdiBell" />
    </MenuButton>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 mt-2 w-[400px] origin-top-right rounded-3xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-6"
      >
        <h1 class="font-bold text-2xl px-8 mb-2">Notifikasi</h1>

        <NotificationItem v-for="(item, index) in dummyNotif" :key="index" :notif="item" />
      </MenuItems>
    </transition>
  </Menu>
</template>

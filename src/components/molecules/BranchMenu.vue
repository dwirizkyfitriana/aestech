<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { mdiChevronDown, mdiHospitalBuilding } from '@mdi/js'
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="">
        <div class="flex gap-4 items-center text-2xl cursor-pointer">
          <svg-icon type="mdi" :path="mdiHospitalBuilding" />
          <h1>Cabang Bandung</h1>
          <svg-icon type="mdi" :path="mdiChevronDown" />
        </div>
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 mt-2 w-60 origin-top-right rounded-3xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-8"
      >
        <h1 class="font-bold text-2xl">Data Cabang</h1>

        <MenuItem v-slot="{ active }">
          <button
            :class="[
              active ? 'text-orange' : 'text-gray-900',
              'group flex w-full items-center rounded-md py-2 text-sm'
            ]"
          >
            Cabang Bandung
          </button>
        </MenuItem>
        <button class="bg-orange text-white rounded-[100px] py-2 px-3 mt-4">
          Lihat Semua Cabang
        </button>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { mdiAccount, mdiHelpCircle, mdiLogoutVariant } from '@mdi/js'
</script>

<template>
  <Menu as="div" class="relative inline-block text-left z-10">
    <div>
      <MenuButton class="">
        <img class="cursor-pointer" src="@/assets/images/avatar.png" alt="" />
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
        <MenuItem v-slot="{ active }">
          <button
            @click="$router.push('/profile')"
            :class="[
              active ? 'text-orange' : 'text-grey-75',
              'group flex gap-3 w-full items-center rounded-md py-2 text-sm'
            ]"
          >
            <svg-icon type="mdi" :path="mdiAccount" />
            Profile
          </button>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <button
            :class="[
              active ? 'text-orange' : 'text-grey-75',
              'group flex gap-3 w-full items-center rounded-md py-2 text-sm'
            ]"
          >
            <svg-icon type="mdi" :path="mdiHelpCircle" />
            Bantuan
          </button>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <button
            :class="[
              active ? 'text-orange' : 'text-red-500',
              'group flex gap-3 w-full items-center rounded-md py-2 text-sm'
            ]"
          >
            <svg-icon type="mdi" :path="mdiLogoutVariant" />
            Logout
          </button>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

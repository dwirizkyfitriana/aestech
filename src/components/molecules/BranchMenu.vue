<script setup lang="ts">
import { useBranchesStore } from '@/stores/branches'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { mdiChevronDown, mdiHospitalBuilding } from '@mdi/js'
import { onMounted } from 'vue'
import BranchMenuItem from '../atoms/BranchMenuItem.vue'

const branchesStore = useBranchesStore()

const fetchBranches = async () => {
  if (branchesStore.branches.length > 0) return

  await branchesStore.getBranches()
}

onMounted(async () => {
  await fetchBranches()
})
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

        <BranchMenuItem
          v-for="branch in branchesStore.branches.slice(0, 4)"
          :key="branch.id"
          :branch="branch"
        />

        <MenuItem>
          <button
            class="bg-orange text-white rounded-[100px] py-2 px-3 mt-4"
            @click="$router.push('/branches')"
          >
            Lihat Semua Cabang
          </button>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

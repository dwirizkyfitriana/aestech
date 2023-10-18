<script setup lang="ts">
import BranchCard from '@/components/atoms/BranchCard.vue'
import PageTitle from '@/components/atoms/PageTitle.vue'
import PaginationMenu from '@/components/molecules/PaginationMenu.vue'
import { useBranchesStore } from '@/stores/branches'
import { mdiMagnify } from '@mdi/js'
import { computed, onMounted, ref } from 'vue'

const branchesStore = useBranchesStore()

const search = ref('')
const computedBranch = computed(() =>
  search.value
    ? branchesStore.branches.filter((item) =>
        item.name.toLowerCase().includes(search.value.toLowerCase())
      )
    : branchesStore.branches
)

onMounted(async () => {
  await branchesStore.getBranches()
})
</script>

<template>
  <PageTitle
    title="Daftar Cabang"
    subtitle="Pilih salah satu cabang untuk melihat aktivitas melalui sistem informasi"
  />

  <div class="mt-12 relative z-0">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-grey-50">
      <svg-icon type="mdi" :path="mdiMagnify" />
    </div>
    <input
      type="search"
      id="search"
      class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
      placeholder="Cari Cabang"
      v-model="search"
    />
  </div>

  <div class="mt-14 grid grid-cols-2 max-md:grid-cols-1 gap-3">
    <BranchCard v-for="branch in computedBranch" :key="branch.id" :branch="branch" />
  </div>

  <div class="w-full mt-12">
    <PaginationMenu class="m-auto" />
  </div>
</template>

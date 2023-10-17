<script setup lang="ts">
import BranchCard from '@/components/atoms/BranchCard.vue'
import PageTitle from '@/components/atoms/PageTitle.vue'
import PaginationMenu from '@/components/molecules/PaginationMenu.vue'
import { useBranchesStore } from '@/stores/branches'
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

  <div class="mt-12">
    <input
      class="w-full bg-transparent border border-grey-50 rounded-[4px] h-14 py-2 px-4"
      type="text"
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

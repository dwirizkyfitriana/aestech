<script setup lang="ts">
import type { Branch } from '@/@types/branch'
import { mdiChevronRight, mdiHospitalBuilding } from '@mdi/js'

type Props = {
  branch: Branch
}

defineProps<Props>()
</script>

<template>
  <div
    class="bg-white rounded-2xl p-6 grid grid-cols-[88px_1fr_44px] gap-3 items-center shadow-lg cursor-pointer"
  >
    <div
      class="bg-orange-16% w-[88px] h-[88px] flex items-center justify-center rounded-xl text-orange"
    >
      <svg-icon class="w-[44px] h-[44px]" type="mdi" :path="mdiHospitalBuilding" />
    </div>
    <div class="flex flex-col gap-2">
      <h1 class="font-bold text-xl">{{ branch.name }}</h1>
      <p>{{ branch.email }}</p>
    </div>
    <div>
      <svg-icon class="w-[44px] h-[44px]" type="mdi" :path="mdiChevronRight" />
    </div>
  </div>
</template>

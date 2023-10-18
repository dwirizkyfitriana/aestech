<script setup lang="ts">
import { mdiAutorenew } from '@mdi/js'
import ProgressChart from './ProgressChart.vue'
import BoxIcon from '../atoms/BoxIcon.vue'
</script>

<template>
  <div class="bg-white shadow-lg p-6 rounded-[24px]">
    <div class="flex items-center gap-3">
      <BoxIcon :icon="mdiAutorenew" />
      <h1 class="font-bold text-lg">Layanan Terlaris</h1>
    </div>
    <div class="flex flex-col gap-8 mt-8">
      <ProgressChart label="Produk: 213 pcs" :progress="50" />
      <ProgressChart label="Perawatan: 213 Pasien" :progress="16" />
      <ProgressChart label="Paket Perawatan: 176 Pasien" :progress="14" />
      <ProgressChart label="Konsultasi: 113 Pasien" :progress="10" />
      <ProgressChart label="Tindakan: 113 Pasien" :progress="10" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { mdiDoctor } from '@mdi/js'
import type { ApexOptions } from 'apexcharts'
import BoxIcon from '../atoms/BoxIcon.vue'

const series = [{ name: 'Ahli', data: [45, 35, 30] }]
const chartOptions: ApexOptions = {
  chart: {
    type: 'bar',
    toolbar: { show: false }
  },
  stroke: {
    show: true,
    colors: ['transparent']
  },
  colors: ['#F58342'],
  xaxis: {
    categories: ['Sarah', 'Fajrin', 'Siska']
  }
}
</script>

<template>
  <div class="col-span-2 bg-white shadow-lg p-6 rounded-[24px]">
    <div class="grid grid-cols-[72px_1fr] gap-3 items-center">
      <BoxIcon :icon="mdiDoctor" />
      <div>
        <h1 class="font-bold text-xl">Aktivitas Ahli Kecantikan</h1>
        <p class="font-normal text-base">Jumlah aktivitas ahli kecantikan bulan ini</p>
      </div>
    </div>

    <div>
      <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

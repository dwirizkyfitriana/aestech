<script setup lang="ts">
import { mdiCalendarMonth, mdiCircleSmall, mdiTrendingUp } from '@mdi/js'
import type { ApexOptions } from 'apexcharts'
import BoxIcon from '../atoms/BoxIcon.vue'

const chartOptions: ApexOptions = {
  chart: {
    type: 'line',
    toolbar: {
      show: false
    }
  },
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 3
  },
  colors: ['#F58342'],
  xaxis: {
    categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
  },
  yaxis: {
    labels: {
      formatter: (value) => Number(value).toLocaleString('id', { maximumFractionDigits: 0 })
    }
  }
}

const series = [
  {
    name: 'Penjualan',
    data: [200000, 400000, 900000, 1200000]
  }
]
</script>

<template>
  <div class="col-span-2 bg-white shadow-lg p-6 rounded-[24px]">
    <div class="grid grid-cols-[72px_1fr_160px] gap-3 items-center">
      <BoxIcon :icon="mdiTrendingUp" />
      <div>
        <h1 class="font-bold text-xl">Pendapatan bulan ini</h1>
        <p class="font-normal text-base">Grafik Pendapatan bulan Mei 2022</p>
      </div>
      <div class="flex items-center gap-1">
        <svg-icon class="w-6 h-6" type="mdi" :path="mdiCalendarMonth" />
        <p class="font-normal text-xs">1/5/2022 - 30/5/2022</p>
      </div>
    </div>
    <div class="w-full flex justify-end items-center">
      <svg-icon class="text-orange w-8 h-8" type="mdi" :path="mdiCircleSmall" />
      <p>Pendapatan Klinik</p>
    </div>

    <div>
      <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChartCard from '@/components/atoms/ChartCard.vue'
import PageTitle from '@/components/atoms/PageTitle.vue'
import ProgressChart from '@/components/molecules/ProgressChart.vue'
import {
  mdiAccountGroup,
  mdiAutorenew,
  mdiCalendarMonth,
  mdiCart,
  mdiCircleSmall,
  mdiHumanQueue,
  mdiPackageVariantClosed,
  mdiTrendingUp
} from '@mdi/js'
import type { ApexOptions } from 'apexcharts'

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
  <PageTitle title="Performa Klinik Cabang Bandung" subtitle="Lihat performa dan laporan klinik" />
  <div class="mt-12 grid grid-cols-3 gap-3">
    <div class="col-span-2 bg-white shadow-lg p-6 rounded-[24px]">
      <div class="grid grid-cols-[72px_1fr_160px] gap-3 items-center">
        <div
          class="bg-orange-16% flex justify-center items-center text-orange w-[72px] h-[72px] rounded-xl"
        >
          <svg-icon type="mdi" :path="mdiTrendingUp" />
        </div>
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
    <div class="bg-white shadow-lg p-6 rounded-[24px]">
      <div class="flex items-center gap-3">
        <div
          class="bg-orange-16% flex justify-center items-center text-orange w-[72px] h-[72px] rounded-xl"
        >
          <svg-icon type="mdi" :path="mdiAutorenew" />
        </div>
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
  </div>

  <div class="mt-8 flex gap-4">
    <ChartCard :icon="mdiAccountGroup" :total="500" label="Pasien di bulan ini" />
    <ChartCard :icon="mdiPackageVariantClosed" :total="241" label="Stok habis bulan ini" />
    <ChartCard :icon="mdiHumanQueue" :total="23" label="Pasien menunggu hari ini" />
    <ChartCard :icon="mdiCart" :total="350" label="Transaksi di bulan ini" />
  </div>
</template>

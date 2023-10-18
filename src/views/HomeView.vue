<script setup lang="ts">
import ChartCard from '@/components/atoms/ChartCard.vue'
import PageTitle from '@/components/atoms/PageTitle.vue'
import DashboardActivityChart from '@/components/molecules/DashboardActivityChart.vue'

import DashboardIncomeChart from '@/components/molecules/DashboardIncomeChart.vue'
import DashboardPromoTable from '@/components/molecules/DashboardPromoTable.vue'
import DashboardRating from '@/components/molecules/DashboardRating.vue'
import DashboardServiceRate from '@/components/molecules/DashboardServiceRate.vue'

import { mdiAccountGroup, mdiCart, mdiHumanQueue, mdiPackageVariantClosed } from '@mdi/js'
</script>

<template>
  <PageTitle title="Performa Klinik Cabang Bandung" subtitle="Lihat performa dan laporan klinik" />
  <div class="mt-12 grid grid-cols-3 gap-3">
    <DashboardIncomeChart />
    <DashboardServiceRate />
  </div>

  <div class="mt-8 flex gap-4">
    <ChartCard :icon="mdiAccountGroup" :total="500" label="Pasien di bulan ini" />
    <ChartCard :icon="mdiPackageVariantClosed" :total="241" label="Stok habis bulan ini" />
    <ChartCard :icon="mdiHumanQueue" :total="23" label="Pasien menunggu hari ini" />
    <ChartCard :icon="mdiCart" :total="350" label="Transaksi di bulan ini" />
  </div>

  <div class="mt-8 grid grid-cols-3 gap-3">
    <DashboardActivityChart />
    <DashboardRating />
  </div>

  <DashboardPromoTable />
</template>

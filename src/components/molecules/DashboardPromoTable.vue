<script setup lang="ts">
import { mdiBrightnessPercent } from '@mdi/js'
import BoxIcon from '../atoms/BoxIcon.vue'
import type { Header, Item } from 'vue3-easy-data-table'

const headers: Header[] = [
  { text: 'Name Promo', value: 'name' },
  { text: 'Besaran Promo', value: 'amount' },
  { text: 'Periode', value: 'period' },
  { text: 'Kode', value: 'code' }
]

const items: Item[] = [
  {
    name: 'Promo all treatment',
    amount: '15%',
    startDate: '12/05/2022',
    endDate: '30/05/2022',
    code: 'TREATMENT'
  },
  {
    name: 'Promo Skincare',
    amount: '25%',
    startDate: '30/05/2022',
    endDate: '30/06/2022',
    code: 'SKINCARE'
  },
  {
    name: 'Buy 1 Get 2',
    amount: 'Gratis Produk',
    startDate: '21/06/2022',
    endDate: '05/07/2022',
    code: 'FREE'
  },
  {
    name: 'Promo Toner',
    amount: '45%',
    startDate: '01/07/2022',
    endDate: '30/08/2022',
    code: 'TONER'
  }
]
</script>

<template>
  <div class="w-full bg-white shadow-lg p-6 rounded-[24px] mt-8">
    <div class="flex gap-3 items-center">
      <BoxIcon :icon="mdiBrightnessPercent" />
      <div>
        <h1 class="font-bold text-xl">Daftar promo klinik</h1>
        <p>Promo-promo yang sedang berlangsung</p>
      </div>
    </div>
    <div class="mt-4">
      <EasyDataTable
        class="!border-0"
        :headers="headers"
        :items="items"
        hide-footer
        header-item-class-name="header-bg"
      >
        <template #item-period="{ startDate, endDate }"> {{ startDate }} - {{ endDate }} </template>
      </EasyDataTable>
    </div>
  </div>
</template>

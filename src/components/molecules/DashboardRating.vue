<script setup lang="ts">
import { mdiStar } from '@mdi/js'
import BoxIcon from '../atoms/BoxIcon.vue'
import RatingBar from '../atoms/RatingBar.vue'
</script>

<template>
  <div class="bg-white shadow-lg p-6 rounded-[24px]">
    <div class="flex items-center gap-3">
      <BoxIcon :icon="mdiStar" />
      <h1 class="font-bold text-lg">Penilaian</h1>
    </div>
    <div class="flex flex-col gap-8 mt-8">
      <RatingBar label="Resepsionis" :rate="4" />
      <RatingBar label="Dokter" :rate="5" />
      <RatingBar label="Ahli Kecantikan" :rate="4" />
    </div>
  </div>
</template>

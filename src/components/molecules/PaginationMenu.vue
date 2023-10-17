<script setup lang="ts">
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
</script>

<template>
  <div
    class="w-1/3 flex justify-between items-center text-xl text-grey-50 [&>svg]:text-black cursor-pointer"
  >
    <svg-icon type="mdi" :path="mdiChevronLeft" />
    <p class="bg-orange rounded-full py-2 px-4 text-white">1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <svg-icon type="mdi" :path="mdiChevronRight" />
  </div>
</template>

<script setup lang="ts">
import { mdiFacebook, mdiInstagram, mdiTwitter } from '@mdi/js'
</script>

<template>
  <div
    class="bg-white w-full rounded-2xl p-12 flex flex-col items-center text-center gap-12 animate-pulse"
  >
    <svg
      class="w-[150px] h-[150px] text-grey-50"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 18"
    >
      <path
        d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
      />
    </svg>
    <div class="flex flex-col items-center">
      <div class="h-2.5 bg-grey-50 rounded-full w-56 mb-4"></div>
      <div class="h-2.5 bg-grey-50 rounded-full w-48 mb-4"></div>
    </div>
    <div class="flex gap-3 items-center text-grey-50">
      <svg-icon type="mdi" :path="mdiInstagram" />
      <svg-icon type="mdi" :path="mdiTwitter" />
      <svg-icon type="mdi" :path="mdiFacebook" />
    </div>
    <div class="flex flex-col items-center">
      <div class="h-2.5 bg-grey-50 rounded-full w-56 mb-4"></div>
      <div class="h-2.5 bg-grey-50 rounded-full w-48 mb-4"></div>
    </div>
  </div>
</template>

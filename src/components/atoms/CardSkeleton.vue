<template>
  <div class="bg-white w-full min-h-[280px] rounded-2xl p-12 flex flex-col gap-2 animate-pulse">
    <div class="grid grid-cols-3 gap-2" v-for="i in 4" :key="i">
      <div class="h-3 bg-grey-75 rounded-full max-w-[280px] mb-2.5"></div>
      <div class="h-3 bg-grey-75 rounded-full max-w-[480px] mb-2.5 col-span-2"></div>
    </div>
  </div>
</template>

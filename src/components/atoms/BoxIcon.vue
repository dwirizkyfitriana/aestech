<script setup lang="ts">
type Props = {
  icon: string
}

defineProps<Props>()
</script>

<template>
  <div
    class="bg-orange-16% flex justify-center items-center text-orange w-[72px] h-[72px] rounded-xl"
  >
    <svg-icon type="mdi" :path="icon" />
  </div>
</template>

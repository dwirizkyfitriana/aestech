<script setup lang="ts">
import { mdiEyeOffOutline, mdiEyeOutline } from '@mdi/js'
import { ref } from 'vue'

type Props = {
  placeholder: string
}

defineProps<Props>()

const show = ref(false)
</script>

<template>
  <div class="relative">
    <input
      :type="show ? 'text' : 'password'"
      class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
      :placeholder="placeholder"
    />
    <svg-icon
      role="button"
      class="absolute right-3.5 bottom-3.5"
      type="mdi"
      :path="show ? mdiEyeOffOutline : mdiEyeOutline"
      @click="show = !show"
    />
  </div>
</template>

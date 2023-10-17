<script setup lang="ts">
import { MenuItem } from '@headlessui/vue'
import { mdiBell } from '@mdi/js'
import type { NotificationItem } from '@/@types/notification'

type Props = {
  notif: NotificationItem
}

const props = defineProps<Props>()

const date = Intl.DateTimeFormat('id', { day: 'numeric', month: 'short' }).format(
  new Date(props.notif.date)
)
</script>

<template>
  <MenuItem v-slot="{ active }">
    <div
      :class="[
        active && 'bg-orange-16%',
        'group grid grid-cols-[56px_1fr_47px] gap-2 items-center py-2 text-sm p-8 cursor-pointer'
      ]"
    >
      <div class="bg-light-grey w-14 h-14 rounded-xl flex items-center justify-center">
        <svg-icon class="text-grey-50" type="mdi" :path="mdiBell" />
      </div>
      <div class="flex flex-col">
        <h1 class="text-xl font-bold">{{ notif.title }}</h1>
        <p>{{ notif.subtitle }}</p>
      </div>
      <div>
        <p>{{ date }}</p>
      </div>
    </div>
  </MenuItem>
</template>

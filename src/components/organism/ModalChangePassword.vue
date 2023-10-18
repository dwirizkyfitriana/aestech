<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import SaveButton from '../atoms/SaveButton.vue'
import CancelButton from '../atoms/CancelButton.vue'
import InputPassword from '../atoms/InputPassword.vue'

type Props = {
  isOpen: boolean
  title: string
  label1: string
  label2: string
}

defineProps<Props>()
defineEmits(['close'])
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="$emit('close')" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle as="h3" class="text-3xl font-bold leading-6 text-gray-900">
                {{ title }}
              </DialogTitle>
              <div class="mt-8 space-y-4">
                <div class="space-y-2">
                  <h1>{{ label1 }}</h1>
                  <InputPassword :placeholder="label1" />
                </div>
                <div class="space-y-2">
                  <h1>{{ label2 }}</h1>
                  <InputPassword :placeholder="label2" />
                </div>
              </div>

              <div class="mt-8 float-right">
                <CancelButton @click="$emit('close')" />
                <SaveButton @click="$emit('close')" />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

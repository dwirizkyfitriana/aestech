import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetcher } from '@/api'
import { ENDPOINTS } from '@/api/endpoints'
import type { User } from '@/@types/user'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>()

  const getUser = async () => {
    try {
      const response = await fetcher(ENDPOINTS.USER, {}, 'GET')
      user.value = response
    } catch (error) {
      console.error({ error })
    }
  }

  return { user, getUser }
})

import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Branch } from '@/@types/branch'
import { fetcher } from '@/api'
import { ENDPOINTS } from '@/api/endpoints'

export const useBranchesStore = defineStore('branches', () => {
  const branches = ref<Branch[]>([])

  const getBranches = async () => {
    try {
      const response = await fetcher(ENDPOINTS.BRANCHES, {}, 'GET')
      branches.value = response
    } catch (error) {
      console.error({ error })
    }
  }

  return { branches, getBranches }
})

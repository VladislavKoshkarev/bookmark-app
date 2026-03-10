import { useAuth } from '@clerk/vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const { getToken } = useAuth()
  async function getSessionToken() {
    return await getToken.value()
  }
  return { getSessionToken }
})

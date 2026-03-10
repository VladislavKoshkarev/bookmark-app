import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Profile } from '@/interfaces/profile'
import { API_ROUTES } from '@/api'
import axios from 'axios'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>()
  async function fetchProfile() {
    const { data } = await axios.get<Profile>(API_ROUTES.profile)
    profile.value = data
  }
  return { profile, fetchProfile }
})

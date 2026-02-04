import { defineStore } from "pinia";
import { ref } from "vue";
import type { Profile } from "@/interfaces/profile";
import { API_ROUTES } from "@/api";

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>();
  async function fetchProfile()  {
    const data = await fetch(API_ROUTES.profile);
    const res = (await data.json()) as Profile
    profile.value = res; 
  }
  return { profile, fetchProfile };
})
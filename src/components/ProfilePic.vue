<script setup lang="ts">
import { onMounted } from 'vue';
import { useProfileStore } from '@/stores/profile.store';

const store = useProfileStore()

onMounted(() => {
  store.fetchProfile();
})
</script>

<template>
  <div class="profile-avatar" v-if="store.profile">
    <img src="/public/avatar.png" class="profile-pic__image" alt="Изображение пользователя">
    <div>Привет, <strong>{{ store.profile.name }}</strong></div>
  </div>
</template>

<style scoped>
  .profile-pic {
    display: flex;
    flex-direction: column;
    gap: 42px;
    font-size: 18px;
    margin-bottom: 40px;
  }
  .profile-pic__image {
  width: 80px;
  height: 80px;
}
</style>
<script setup lang="ts">
import ButtonText from '@/components/TextButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function redirectToMain() {
  router.push({
    name: 'main'
  })
}
</script>

<template>
  <div class="auth">
    <h1 class="auth__header">Bookmarkly</h1 >
    <ButtonText @click="redirectToMain">Вход</ButtonText>
  </div>
</template>

<style scoped>
  .auth {
    height: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 52px;
  }
  .auth__header {
    font-size: 52px;
    font-weight: 700;
  }
</style>
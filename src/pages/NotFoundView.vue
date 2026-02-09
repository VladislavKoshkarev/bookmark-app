<script setup lang="ts">
import ButtonText from '@/components/TextButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function redirectToMain() {
  router.push({
    name: 'auth'
  })
}
</script>

<template>
  <div class="not-found">
    <h1 class="not-found__header">404</h1 >
    <ButtonText @click="redirectToMain">На главную</ButtonText>
  </div>
</template>

<style scoped>
  .not-found {
    height: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 52px;
  }
   .not-found__header {
    font-size: 128px;
    font-weight: 700;
  }
</style>
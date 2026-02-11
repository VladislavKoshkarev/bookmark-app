<script setup lang="ts">
import InputString from '@/components/InputString.vue';
import ButtonText from '@/components/TextButton.vue';
import { ref } from 'vue';

const form = ref<{ email?: string, password?: string }>({});

function onSubmit(event: Event) {
  event.preventDefault();
  console.log(form.value)
  form.value = {}
}
</script>

<template>
  <div class="auth">
    <h1 class="auth__header">Bookmarkly</h1>
    <form class="auth__form" @submit="onSubmit">
      <InputString v-model="form.email" placeholder="Email"></InputString>
      <InputString v-model="form.password" placeholder="Пароль" type="password"></InputString>
      <ButtonText>Вход</ButtonText>
    </form>
  </div>
</template>

<style scoped>
  .auth {
     display: grid;
    place-items: center;
    min-height: 50vh;
  }
  .auth__header {
    font-size: 52px;
    font-weight: 700;
  }
  .auth__form {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 52px;
    display: flex;
}
</style>
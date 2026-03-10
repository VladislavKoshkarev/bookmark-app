<script setup lang="ts">
import { SignUp } from '@clerk/vue'
</script>

<template>
  <div class="auth">
    <h1 class="auth__header">Bookmarkly</h1>
    <SignUp forceRedirectUrl="/main" />
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

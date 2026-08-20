<script setup lang="ts">
import { UserButton, useUser } from '@clerk/vue'
const { user } = useUser()
</script>

<template>
  <div class="profile-avatar">
    <UserButton />
    <div>
      Привет, <strong>{{ user?.firstName }}</strong>
    </div>
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
.profile-avatar {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>

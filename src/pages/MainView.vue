<script setup lang="ts">
import ProfilePic from '../components/ui/ProfilePic.vue'
import CategoryList from '../features/categories/components/CategoryList.vue'
</script>

<template>
  <div class="app">
    <nav class="nav">
      <ProfilePic />
      <CategoryList />
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  min-height: calc(100vh - 140px);
  gap: 200px;
  max-width: 1450px;
  margin: 140px auto 0 auto;
}
.nav {
  min-width: 320px;
}
main {
  width: 100%;
}
</style>

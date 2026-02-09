<script setup lang="ts">
import type { Category } from '@/interfaces/category';

import { useCategoriesStore } from '@/stores/categories.store';
import { ref, watch } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
 
const route = useRoute();
const state = useCategoriesStore();
const category = ref<Category>()

watch(() => state.categories, () => {
  if (typeof route.params.alias === 'string') {
    category.value = state.getCategoryByAlias(route.params.alias)
  }
})

onBeforeRouteUpdate((to) => {
  if (typeof to.params.alias === 'string') {
    category.value = state.getCategoryByAlias(to.params.alias)
  }
})
</script>

<template>
  <div class="index">
    {{ category?.name }}
    <h1 class="index__header">Добро пожаловать в Bookmarkly!</h1>
    <p class="index__description">Чтобы начать пользоваться, выберите категорию закладок или создайте новую</p>
  </div>
</template>

<style scoped>
.index {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
}
.index__header {
  font-size: 24px;
  font-weight: 500;
}
.index__description {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}
</style>
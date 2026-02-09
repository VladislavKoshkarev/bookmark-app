<script setup lang="ts">
import type { Category } from '@/interfaces/category';
import { useBookmarksStore } from '@/stores/bookmarks.store';

import { useCategoriesStore } from '@/stores/categories.store';
import { ref, watch } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
 
const route = useRoute();
const categoryStore = useCategoriesStore();
const bookmarksStore = useBookmarksStore()
const category = ref<Category>()

watch(() => categoryStore.categories, () => {
  if (typeof route.params.alias === 'string') {
    category.value = categoryStore.getCategoryByAlias(route.params.alias)
  }
})

onBeforeRouteUpdate((to) => {
  if (typeof to.params.alias === 'string') {
    category.value = categoryStore.getCategoryByAlias(to.params.alias)
    if (category.value) {
      bookmarksStore.fetchBookmarks(category.value.id)
    }
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
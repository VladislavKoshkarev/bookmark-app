<script setup lang="ts">
import CategoryHeader from '@/components/categoryHeader.vue';
import type { Category } from '@/interfaces/category';
import { useBookmarksStore } from '@/stores/bookmarks.store';

import { useCategoriesStore } from '@/stores/categories.store';
import { onMounted, ref, watch } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
 
const route = useRoute();
const categoryStore = useCategoriesStore();
const bookmarksStore = useBookmarksStore()
const category = ref<Category>()

  onMounted(() => {
    if (typeof route.params.alias === 'string') {
    category.value = categoryStore.getCategoryByAlias(route.params.alias)
    if (category.value) {
      bookmarksStore.fetchBookmarks(category.value.id)
    }
  }
  })

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
    <CategoryHeader v-if="category" :category="category"/>
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
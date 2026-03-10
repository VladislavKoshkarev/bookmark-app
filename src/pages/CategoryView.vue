<script setup lang="ts">
import BookmarkAdd from '@/components/BookmarkAdd.vue'
import BookmarkCard from '@/components/BookmarkCard.vue'
import BookmarkSort from '@/components/BookmarkSort.vue'
import CategoryHeader from '@/components/CategoryHeader.vue'
import type { Category } from '@/interfaces/category'
import { useBookmarksStore } from '@/stores/bookmarks.store'

import { useCategoriesStore } from '@/stores/categories.store'
import { onMounted, ref, watch } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

const route = useRoute()
const categoryStore = useCategoriesStore()
const bookmarksStore = useBookmarksStore()
const category = ref<Category>()

function sortBookmarks(sort: string) {
  bookmarksStore.activeSort = sort
  if (category.value) {
    bookmarksStore.fetchBookmarks(category.value.id, bookmarksStore.activeSort)
  }
}

onMounted(() => {
  if (typeof route.params.alias === 'string') {
    category.value = categoryStore.getCategoryByAlias(route.params.alias)
    if (category.value) {
      bookmarksStore.fetchBookmarks(category.value.id, bookmarksStore.activeSort)
    }
  }
})

watch(
  () => categoryStore.categories,
  () => {
    if (typeof route.params.alias === 'string') {
      category.value = categoryStore.getCategoryByAlias(route.params.alias)
    }
  },
)

onBeforeRouteUpdate((to) => {
  if (typeof to.params.alias === 'string') {
    category.value = categoryStore.getCategoryByAlias(to.params.alias)
    if (category.value) {
      bookmarksStore.fetchBookmarks(category.value.id, bookmarksStore.activeSort)
    }
  }
})
</script>

<template>
  <CategoryHeader v-if="category" :category="category" />
  <BookmarkSort :option="bookmarksStore.activeSort" @sort="sortBookmarks" />
  <div class="category-list">
    <BookmarkCard v-for="item in bookmarksStore.bookmarks" :key="item.id" v-bind="item" />
    <BookmarkAdd v-if="category" :category_id="category.id" />
  </div>
</template>

<style scoped>
.category-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(10, 350px);
  gap: 24px;
}
</style>

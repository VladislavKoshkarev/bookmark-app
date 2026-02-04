<script setup lang="ts">
import { useCategoriesStore } from '@/stores/categories.store';
import { onMounted } from 'vue';

const store = useCategoriesStore()

onMounted(() => {
  store.fetchCategories()
})
</script>

<template>
      <ul class="category-list">
        <li class="list-item" v-for="item in store.categories" :key="item.id">
          <a :href="`/${item.alias}`">{{ item.name }}</a>
        </li>
      </ul>
</template>

<style scoped>
.category-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0;
  margin: 0;
}
.list-item {
  list-style: none;
}
.list-item a {
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s;
  color: var(--color-fg);
}
.list-item a:hover {
  font-size: 24px;
  font-weight: 700;
}
</style>
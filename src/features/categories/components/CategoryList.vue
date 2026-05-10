<script setup lang="ts">
import { useCategoriesStore } from '@/features/categories/store/categories.store'
import { onMounted } from 'vue'
import IconButton from '@/components/ui/IconButton.vue'
import PlusIcon from '@/icons/PlusIcon.vue'

const store = useCategoriesStore()

onMounted(() => {
  store.fetchCategories()
})
</script>

<template>
  <ul class="category-list">
    <li class="list-item" v-for="item in store.categories" :key="item.id">
      <RouterLink active-class="active-link" :to="`/main/${item.alias}`">{{
        item.name
      }}</RouterLink>
    </li>
    <li>
      <IconButton @click="store.createCategory">
        <PlusIcon />
      </IconButton>
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
.category-list li {
  list-style: none;
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
.list-item a:hover,
.list-item a.active-link {
  font-size: 24px;
  font-weight: 700;
}
</style>

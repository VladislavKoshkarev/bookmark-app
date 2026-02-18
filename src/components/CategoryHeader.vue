<script setup lang="ts">
import type { Category } from '@/interfaces/category';
import IconButton from './IconButton.vue';
import EditIcon from '@/icons/EditIcon.vue';
import { ref } from 'vue';
import TrashIcon from '@/icons/TrashIcon.vue';
import OkIcon from '@/icons/OkIcon.vue';
import InputString from './InputString.vue';
import { useCategoriesStore } from '@/stores/categories.store';


const { category } = defineProps<{ category: Category }>()
const isEdited = ref<boolean>();
const newCategoryName = ref<string>(category.name)
const categoriesStore = useCategoriesStore();

function toggleEdit() {
  isEdited.value = !isEdited.value
}
function updateCategory() {
 if (newCategoryName.value) {
  categoriesStore.updateCategory(newCategoryName.value, category.alias, category.id)
  toggleEdit();
 } else {
  return
 }
}
</script>

<template>
  <div class="category-header">
    <h1 v-if="!isEdited" class="category-name">{{ category.name }}</h1>
    <div v-if="isEdited">
      <InputString v-model="newCategoryName" />
      <IconButton @click="updateCategory">
        <OkIcon/>
      </IconButton>
    </div>
    <div v-if="!isEdited">
      <IconButton @click="toggleEdit">
        <EditIcon/>
      </IconButton>
      <IconButton>
        <TrashIcon/>
      </IconButton>
    </div>
  </div>
</template>

<style scoped>
  .category-header {
    display: flex;
    justify-content: space-between;
    min-width: 100%;
  }
</style>
<script setup lang="ts">
import type { Category } from '@/interfaces/category'
import IconButton from '@/components/ui/IconButton.vue'
import EditIcon from '@/icons/EditIcon.vue'
import { ref } from 'vue'
import TrashIcon from '@/icons/TrashIcon.vue'
import OkIcon from '@/icons/OkIcon.vue'
import InputString from '@/components/ui/InputString.vue'
import { useCategoriesStore } from '@/features/categories/store/categories.store'
import { useRouter } from 'vue-router'

const { category } = defineProps<{ category: Category }>()
const isEdited = ref<boolean>()
const newCategoryName = ref<string>(category.name)
const categoriesStore = useCategoriesStore()
const router = useRouter()

function toggleEdit() {
  isEdited.value = !isEdited.value
}
function updateCategory() {
  if (newCategoryName.value) {
    categoriesStore.updateCategory(newCategoryName.value, category.alias, category.id)
    toggleEdit()
  } else {
    return
  }
}
function deleteCategory() {
  categoriesStore.deleteCategory(category.id)
  router.push({ name: 'main' })
}
</script>

<template>
  <div class="category-header">
    <h1 v-if="!isEdited" class="category-name">{{ category.name }}</h1>
    <div class="category-header__edit" v-if="isEdited">
      <InputString v-model="newCategoryName" is-focused />
      <IconButton @click="updateCategory">
        <OkIcon />
      </IconButton>
    </div>
    <div class="category-header__actions" v-if="!isEdited">
      <IconButton @click="toggleEdit">
        <EditIcon />
      </IconButton>
      <IconButton @click="deleteCategory">
        <TrashIcon />
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
.category-header__actions,
.category-header__edit {
  display: flex;
  gap: 16px;
}
</style>

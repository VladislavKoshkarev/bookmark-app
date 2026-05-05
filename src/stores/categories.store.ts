import { API_ROUTES, http } from '@/shared/apiClient'
import type { Category } from '@/interfaces/category'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<Category[]>([])
  async function fetchCategories() {
    const { data } = await http.get<Category[]>(API_ROUTES.categories)
    categories.value = data
  }
  async function createCategory() {
    const { data } = await http.post<Category>(API_ROUTES.categories, {
      name: 'Новая категория',
      alias: uuidv4(),
    })
    categories.value.push(data)
  }
  async function updateCategory(name: string, alias: string, id: number) {
    await http.put<Category>(API_ROUTES.categories + '/' + id, {
      name,
      alias,
    })
    fetchCategories()
  }
  async function deleteCategory(id: number) {
    await http.delete<Category>(API_ROUTES.categories + '/' + id)
    fetchCategories()
  }
  function getCategoryByAlias(alias: string): Category | undefined {
    if (typeof alias === 'string') {
      return categories.value.find((cat) => cat.alias == alias)
    }
  }

  return {
    categories,
    fetchCategories,
    createCategory,
    getCategoryByAlias,
    updateCategory,
    deleteCategory,
  }
})

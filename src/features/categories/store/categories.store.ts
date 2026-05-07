import type { Category, State } from '@/features/categories/types/category'
import { defineStore } from 'pinia'
import { categoriesService } from '../api/categories.service'

export const useCategoriesStore = defineStore('categories', {
  state: (): State => ({
    categories: [],
    loading: false,
    error: null,
    id: 1,
    name: '',
    alias: '',
  }),
  actions: {
    async fetchCategories() {
      this.loading = true
      this.error = null

      try {
        this.categories = await categoriesService.fetchCategories()
      } catch (e: unknown) {
        this.error = e instanceof Error ? e.message : 'Unknown error'
      } finally {
        this.loading = false
      }
    },
    async createCategory() {
      this.error = null

      try {
        const newCategory = await categoriesService.createCategory()
        this.categories.push(newCategory)
      } catch (e: unknown) {
        this.error = e instanceof Error ? e.message : 'Unknown error'
      }
    },
    async updateCategory(name: string, alias: string, id: number) {
      this.error = null

      try {
        await categoriesService.updateCategory(name, alias, id)
        const category = this.categories.find((cat) => cat.id == id)
        if (category) {
          category.name = name
        }
      } catch (e: unknown) {
        this.error = e instanceof Error ? e.message : 'Unknown error'
      }
    },
    async deleteCategory(id: number) {
      this.loading = true
      this.error = null

      try {
        await categoriesService.deleteCategory(id)
        this.categories = this.categories.filter((c) => c.id !== id)
      } catch (e: unknown) {
        this.error = e instanceof Error ? e.message : 'Unknown error'
      } finally {
        this.loading = false
      }
    },
    getCategoryByAlias(alias: string): Category | undefined {
      if (typeof alias === 'string') {
        return this.categories.find((cat) => cat.alias == alias)
      }
    },
  },
})

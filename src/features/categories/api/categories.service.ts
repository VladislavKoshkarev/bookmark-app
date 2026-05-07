import { API_ROUTES, http } from '@/shared/apiClient'
import type { Category } from '../types/category'
import { v4 as uuidv4 } from 'uuid'

export const categoriesService = {
  async fetchCategories(): Promise<Category[]> {
    const { data } = await http.get<Category[]>(API_ROUTES.categories)
    return data
  },
  async createCategory(): Promise<Category> {
    const { data } = await http.post<Category>(API_ROUTES.categories, {
      name: 'Новая категория',
      alias: uuidv4(),
    })
    return data
  },
  async updateCategory(name: string, alias: string, id: number): Promise<void> {
    await http.put<Category>(API_ROUTES.categories + '/' + id, {
      name,
      alias,
    })
  },
  async deleteCategory(id: number): Promise<void> {
    await http.delete<Category>(API_ROUTES.categories + '/' + id)
  },
}

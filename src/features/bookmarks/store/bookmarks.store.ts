import { API_ROUTES, http } from '@/api'
import type { Bookmark } from '@/features/bookmarks/types/bookmark'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBookmarksStore = defineStore('bookmarks', () => {
  const bookmarks = ref<Bookmark[]>([])
  const activeSort = ref<string>('date')
  async function fetchBookmarks(categoryId: number, sort: string) {
    const { data } = await http.get<Bookmark[]>(API_ROUTES.bookmarks.get(categoryId), {
      params: {
        sort,
      },
    })
    bookmarks.value = data
  }
  async function deleteBookmark(id: number, categoryId: number) {
    await http.delete<Bookmark[]>(API_ROUTES.bookmarks.delete(id))
    fetchBookmarks(categoryId, activeSort.value)
  }

  async function createBookmark(url: string, category_id: number) {
    const { data } = await http.post<Bookmark>(API_ROUTES.bookmarks.create, {
      url,
      category_id,
    })
    bookmarks.value.push(data)
  }

  return { bookmarks, activeSort, fetchBookmarks, deleteBookmark, createBookmark }
})

import { API_ROUTES, http } from '@/shared/apiClient'
import type { Bookmark, SortType } from '../types/bookmark'

export const bookmarksService = {
  async fetchBookmarks(categoryId: number, sort: SortType): Promise<Bookmark[]> {
    const { data } = await http.get<Bookmark[]>(API_ROUTES.bookmarks.get(categoryId), {
      params: {
        sort,
      },
    })
    return data
  },
  async deleteBookmark(id: number): Promise<void> {
    await http.delete<Bookmark[]>(API_ROUTES.bookmarks.delete(id))
  },
  async createBookmark(url: string, category_id: number) {
    const { data } = await http.post<Bookmark>(API_ROUTES.bookmarks.create, {
      url,
      category_id,
    })
    return data
  },
}

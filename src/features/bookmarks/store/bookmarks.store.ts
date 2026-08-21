import { type State, SortType } from '@/features/bookmarks/types/bookmark'
import { defineStore } from 'pinia'
import { bookmarksService } from '../api/bookmarks.service'

export const useBookmarksStore = defineStore('bookmarks', {
  state: (): State => ({
    bookmarks: [],
    loading: false,
    error: null,
    categoryId: 1,
    activeSort: SortType.Date,
  }),
  actions: {
    async fetchBookmarks() {
      this.loading = true
      this.error = null

      try {
        this.bookmarks = await bookmarksService.fetchBookmarks(this.categoryId, this.activeSort)
      } catch (e: unknown) {
        this.error = e instanceof Error ? e.message : 'Unknown error'
      } finally {
        this.loading = false
      }
    },
    async applyFilters(categoryId?: number, activeSort?: SortType) {
      if (categoryId) {
        this.categoryId = categoryId
      }
      if (activeSort) {
        this.activeSort = activeSort
      }
      await this.fetchBookmarks()
    },
    async deleteBookmark(id: number) {
      this.error = null

      try {
        await bookmarksService.deleteBookmark(id)

        this.bookmarks = this.bookmarks.filter((b) => b.id !== id)
      } catch (e: unknown) {
        this.error = e instanceof Error ? e.message : 'Unknown error'
      }
    },
    async createBookmark(url: string, categoryId: number) {
      this.error = null

      try {
        const newBookmark = await bookmarksService.createBookmark(url, categoryId)
        this.bookmarks.push(newBookmark)
      } catch (e: unknown) {
        this.error = e instanceof Error ? e.message : 'Unknown error'
      }
    },
  },
})

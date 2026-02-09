import { API_ROUTES, http } from "@/api";
import type { Bookmark } from "@/interfaces/bookmark";
import type { Category } from "@/interfaces/category";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useBookmarksStore = defineStore('bookmarks', () => {
  const bookmarks = ref<Bookmark[]>([]);
  async function fetchBookmarks(id: number) {
    const { data } = await http.get<Bookmark[]>(API_ROUTES.bookmarks(id));
    bookmarks.value = data
  }

  return { bookmarks, fetchBookmarks }
})
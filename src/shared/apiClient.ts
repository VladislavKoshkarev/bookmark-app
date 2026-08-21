import axios from 'axios'

export const API_ROUTES = {
  profile: `profile`,
  categories: `categories`,
  bookmarks: {
    get: (id: number) => `categories/${id}/bookmarks`,
    delete: (id: number) => `bookmarks/${id}`,
    create: `bookmarks`,
  },
}

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

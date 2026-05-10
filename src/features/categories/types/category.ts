export interface Category {
  id: number
  name: string
  alias: string
  bookmarks: number | null
}

export interface State {
  categories: Category[]
  loading: boolean
  error: string | null
  id: number
  name: string
  alias: string
}

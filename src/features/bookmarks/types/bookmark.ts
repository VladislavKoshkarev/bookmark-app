export enum SortType {
  Date = 'date',
  Title = 'title',
}

export interface Bookmark {
  id: number
  category_id: number
  url: string
  title: string
  created_at: Date
  image: string
}

export interface State {
  bookmarks: Bookmark[]
  loading: boolean
  error: string | null
  categoryId: number
  activeSort: SortType
}

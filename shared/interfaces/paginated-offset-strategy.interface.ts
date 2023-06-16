export interface PaginatedOffsetStrategyI<T = any> {
  data: T[]
  limit: number
  page: number
}

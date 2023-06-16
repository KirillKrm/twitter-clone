export interface PaginatedTokenStrategyI<T = any> {
  data: T[]
  nextToken?: number
}

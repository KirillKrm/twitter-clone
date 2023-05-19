// TODO might be reused by others findAll methods
export type PaginatedGetAll<T = any> = {
  data: T[]
  nextToken?: number
}

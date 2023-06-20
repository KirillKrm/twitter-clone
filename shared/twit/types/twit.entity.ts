import { UserI } from '@shared/user/types'

export interface TwitI {
  id: number
  author: UserI
  content: string
  // TODO
  // likes
  // comments
  // retwits
  // views
  createdAt: Date
  updatedAt: Date
}

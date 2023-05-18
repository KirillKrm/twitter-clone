import { UserI } from './user.interface'

export interface TwitI {
  id: number
  author: UserI
  content: string
  // TODO
  // likes: number
  // TODO
  // comments: number
  // TODO
  // retwits: number
  // TODO
  // views: number
  createdAt: Date
  updatedAt: Date
}

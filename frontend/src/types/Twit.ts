export type Twit = {
  id: number
  author: {
    id: number
    avatar?: string
    username: string
    nickname: string
    email: string
    createdAt: Date
    updatedAt: Date
  }
  content: string
  likes?: number //TODO not optional, wait for backend implementation
  comments?: number //TODO not optional, wait for backend implementation
  retwits?: number //TODO not optional, wait for backend implementation
  createdAt: Date
  updatedAt: Date
}

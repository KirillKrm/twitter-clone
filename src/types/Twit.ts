export type Twit = {
  id: number
  author: {
    id: number
    username: string
    nickname: string
    avatar?: string
  }
  content: string
  likes?: number //TODO not optional, wait for backend implementation
  comments?: number //TODO not optional, wait for backend implementation
  retwits?: number //TODO not optional, wait for backend implementation
  createdAt: Date
  updatedAt: Date
}

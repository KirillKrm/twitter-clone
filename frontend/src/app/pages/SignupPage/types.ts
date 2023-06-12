// TODO use RegisterDto when moved to monorepo
export type SignUpPayload = {
  username: string
  nickname: string
  email: string
  password: string
  birthday: { month: string; day: string; year: string }
}

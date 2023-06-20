interface CreateUserDtoI {
  email: string
  password: string
  username: string
  nickname: string
}

export interface RegisterDtoI
  extends Pick<
    CreateUserDtoI,
    'email' | 'password' | 'username' | 'nickname'
  > {}

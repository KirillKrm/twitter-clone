import { UserI } from '../types'

export interface CreateUserDtoI
  extends Omit<UserI, 'id' | 'createdAt' | 'updatedAt'> {}

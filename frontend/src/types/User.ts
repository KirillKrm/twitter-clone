import { UserI } from '../../../shared/interfaces'

// TODO move remove avatar after implementing it in UserI
export type User = UserI & {
  avatar?: string
}

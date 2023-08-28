import { createContext } from 'react'

import { UserState } from '../pages/FeedPage/slice/types'

export const UserContext = createContext<UserState | undefined>(null)

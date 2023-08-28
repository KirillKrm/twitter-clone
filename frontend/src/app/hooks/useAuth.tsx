import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { userActions } from 'app/pages/FeedPage/slice/index'
import { SignUpPayload } from 'app/pages/SignupPage/types'
import { User } from '../../types/User'
// import { UserState } from '../pages/FeedPage/slice/types'

import {
  register as registerRequest,
  login as loginRequest,
} from 'app/api/auth'
import { getMe as getMeRequest } from 'app/api/me'
import { UserState } from 'app/pages/FeedPage/slice/types'

export const useRegistration = () => {
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<User>()

  const register = async (formData: SignUpPayload): Promise<void> => {
    setLoading(true)

    try {
      const response = await registerRequest(formData)
      setUser(response)
    } catch (error) {
      setError((error as any).message)
    }

    setLoading(false)
  }

  return { register, user, loading, error }
}

// type LocalStorageAccessUnit<T = unknown> = {
//   get: () => T | undefined
//   set: (T) => void
// }

// type LocalStorageT<T extends Record<string, any>> = {
//   [P in keyof T]: LocalStorageAccessUnit<T[P]>
// }

// type JwtAccessToken = string

// type LocalStorageEntities = {
//   currentUser: User
//   jwtAccess: JwtAccessToken
// }

// TODO try to make all fields static to acess them without creating an instance
// class LocalStorage implements LocalStorageT<LocalStorageEntities> {
//   currentUser = {
//     get(): User | undefined {
//       const userInStore = localStorage.getItem('user')

//       return userInStore ? JSON.parse(userInStore) : undefined
//     },
//     set(user: User): void {
//       localStorage.setItem('user', JSON.stringify(user))
//     },
//   }

//   jwtAccess = {
//     get(): JwtAccessToken | undefined {
//       return localStorage.getItem('jwtAccess') || undefined
//     },
//     set(jwtAccess: JwtAccessToken): void {
//       localStorage.setItem('jwtAccess', jwtAccess)
//     },
//   }
// }

// const ownLocalStorage = new LocalStorage()

export const useAuth = () => {
  // ownLocalStorage.currentUser.get()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const setUser = (payload: UserState) => {
    dispatch(userActions.changeUser(payload))
  }
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  // const userInStore = localStorage.getItem('user')
  // const [user, setUser] = useState<UserState>(
  //   userState || null,
  //   // userInStore ? (JSON.parse(userInStore) as User) : null,
  // )

  const login = async (formData: {
    // TODO Use Dto type
    username: string
    password: string
  }): Promise<void> => {
    setLoading(true)

    try {
      const tokens = await loginRequest(formData)

      localStorage.setItem('jwtAccessToken', tokens.jwtAccessToken)
      localStorage.setItem('jwtRefreshToken', tokens.jwtRefreshToken)

      const user = await getMeRequest()
      setUser(user)
    } catch (error) {
      setError((error as any).message)
    }

    setLoading(false)
  }

  const getMe = async (): Promise<User | null> => {
    try {
      const user = await getMeRequest()
      setUser(user)

      return user
    } catch (error) {
      setError((error as any).message)

      return null
    }
  }

  const logout = (): void => {
    localStorage.removeItem('jwtAccessToken')
    localStorage.removeItem('jwtRefreshToken')
    setUser(null)
    navigate('/login')
  }

  return { login, logout, getMe, loading, error }
}

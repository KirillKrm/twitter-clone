import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { SignUpPayload } from 'app/pages/SignupPage/types'

import {
  register as registerRequest,
  login as loginRequest,
} from 'app/api/services'
import { getMe as getMeRequest } from 'app/api/me'

// TODO add more types to all returning functions/objects
type User = {
  id: number
  username: string
  nickname: string
  email: string
  password: string
  createAt: Date
  updatedAt: Date
}

export const useRegistration = () => {
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<User>()

  const register = async (formData: SignUpPayload) => {
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

export const useLogout = () => {
  const navigate = useNavigate()
  localStorage.removeItem('jwtAccessToken')
  localStorage.removeItem('jwtRefreshToken')
  navigate('/login')
}

export const useAuth = () => {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<User>()

  const login = async (formData: { username: string; password: string }) => {
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
      const user: User = await getMeRequest()
      setUser(user)

      return user
    } catch (error) {
      setError((error as any).message)

      return null
    }
  }

  useEffect(() => {
    getMe()
  }, [])

  return { user, login, getMe, loading, error }
}

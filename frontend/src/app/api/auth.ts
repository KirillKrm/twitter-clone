import { SignUpPayload } from 'app/pages/SignupPage/types'
import { apiClient } from './api-client'

import { User } from '../../types/User'
import { JwtTokens } from '../../types/JwtTokens'
import { ExceptionResponseI } from '../../../../shared/interfaces'

export function randLocation(): number {
  const totalLocations = 76
  return Math.floor(Math.random() * (totalLocations - 1) + 1)
}

export async function register(registerData: SignUpPayload): Promise<User> {
  const res = await apiClient.post<User & ExceptionResponseI>(
    'v1/auth/register',
    registerData,
    async (res, body) => {
      if (res.status !== 201) {
        throw new Error(`${res.status}: ${body.message}`)
      }
    },
  )

  console.log('Fetched user ' + res.id)

  return res
}

export async function login(loginData: {
  username: string
  password: string
}): Promise<JwtTokens> {
  const res = await apiClient.post<JwtTokens & ExceptionResponseI>(
    'v1/auth/login',
    loginData,
    async (res, body) => {
      if (res.status !== 200) {
        throw new Error(`${res.status}: ${body.message}`)
      }
    },
  )

  console.log('Login user ' + loginData.username)

  return res
}

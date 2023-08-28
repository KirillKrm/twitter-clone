import { apiClient } from './api-client'
import { User } from '../../types/User'

export async function getUser(nickname: string): Promise<User> {
  const res = await apiClient.get<User>(
    `v1/users?nickname=${nickname}`,
    async res => {
      if (res.status !== 200) {
        throw new Error(`Can't get user. Response status: ${res.status}`)
      }
    },
  )

  console.log('Fetched user: ', JSON.stringify(res))

  return res
}

import { apiClient } from './api-client'

// TODO types
export async function getMe() {
  const res = await apiClient.get('v1/me', async res => {
    if (res.status !== 200) {
      throw new Error(`Can't get me. Response status: ${res.status}`)
    }
  })

  console.log('Fetched user: ', JSON.stringify(res))

  return res
}

import { apiClient } from './api-client'

// TODO types
export async function postTwit(body: { [key: string]: string }) {
  const res = await apiClient.post('v1/twits', body, async res => {
    if (res.status !== 201) {
      throw new Error(`Can't create tweet. Response status: ${res.status}`)
    }
  })

  console.log('Fetched twit: ', JSON.stringify(res))

  return res
}

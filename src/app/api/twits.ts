import { apiClient } from './api-client'

type GetTwitsQuery = {
  limit?: number
  token?: number
  userId?: number
}

const buildURLSearchParams = (obj: {
  [key: string]: string | number | boolean | undefined
}): { [key: string]: string } => {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([key, value]) => !!value)
      .map(([key, value]) => [key, (value as any).toString()]),
  )
}

// TODO types
export async function getTwits(query?: GetTwitsQuery) {
  let searchParams: string = ''
  if (query) {
    searchParams = new URLSearchParams(buildURLSearchParams(query)).toString()
  }

  const res = await apiClient.get('v1/twits?' + searchParams, async res => {
    if (res.status === 404) {
    } else if (res.status !== 200) {
      throw new Error(`Can't get twts. Response status: ${res.status}`)
    }
  })

  return res
}

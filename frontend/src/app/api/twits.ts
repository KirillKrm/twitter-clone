import { apiClient } from './api-client'
import { Twit } from '../../types/Twit'
import { Twits } from '../../types/Twits'

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

export async function getTwits(query?: GetTwitsQuery): Promise<Twits> {
  let searchParams: string = ''
  if (query) {
    searchParams = new URLSearchParams(buildURLSearchParams(query)).toString()
  }

  let notFound = false
  const res = await apiClient.get<Twits>(
    'v1/twits?' + searchParams,
    async res => {
      if (res.status === 404) {
        notFound = true
      } else if (res.status !== 200) {
        throw new Error(`Can't get twits. Response status: ${res.status}`)
      }
    },
  )

  // TODO maybe rewrite
  if (notFound) {
    return {
      data: [],
      nextToken: Number.MAX_SAFE_INTEGER,
    }
  }

  return res
}

export async function postTwit(body: { [key: string]: string }): Promise<Twit> {
  const res = await apiClient.post<Twit>('v1/twits', body, async res => {
    if (res.status !== 201) {
      throw new Error(`Can't create tweet. Response status: ${res.status}`)
    }
  })

  console.log('Fetched twit: ', JSON.stringify(res))

  return res
}

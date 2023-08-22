import * as React from 'react'
import 'index.css'

import Twit from 'app/pages/FeedPage/components/Twit'
import { getTwits } from 'app/api/twits'
import Loading from 'app/components/Loading'
import { Twit as TwitType } from '../../../../types/Twit'

export type TwitsProps = {
  limit?: number
  userId?: number
}

export default function Twits({ limit = 10, userId }: TwitsProps) {
  const [token, setToken] = React.useState<number>()
  const [twits, setTwits] = React.useState<TwitType[]>([])
  const [isFetchMore, setIsFetchMore] = React.useState(true)
  const [wasLastList, setWasLastList] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => {
      if (
        document.documentElement.scrollTop +
          document.documentElement.clientHeight ===
        document.documentElement.scrollHeight
      ) {
        setIsFetchMore(true)
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })

  React.useEffect(() => {
    const fetchData = async () => {
      const { data: nextTwits, nextToken } = await getTwits({
        userId,
        limit,
        token,
      })

      if (nextTwits.length < 10) {
        setWasLastList(true)
        setTwits(twits.concat(nextTwits))
        return
      }

      setTwits(twits.concat(nextTwits))
      setToken(nextToken)
      setIsFetchMore(false)
    }

    if (!wasLastList && isFetchMore) {
      fetchData()
    }
  }, [token, wasLastList, twits, isFetchMore, userId, limit])

  return (
    <div>
      {twits.map(twit => (
        <Twit key={twit.id} data={twit} />
      ))}
      {!wasLastList && (
        <div className={styles.loading}>
          <Loading />
        </div>
      )}
    </div>
  )
}

const styles = {
  loading: `
    flex
    w-full
    justify-center
  `,
}

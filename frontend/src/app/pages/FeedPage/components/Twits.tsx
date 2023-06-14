import * as React from 'react'
import 'index.css'

import Twit from 'app/pages/FeedPage/components/Twit'
import { getTwits } from 'app/api/twits'
import Loading from 'app/components/Loading'
import { Twit as TwitType } from '../../../../types/Twit'

export default function Twits() {
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
      const response = await getTwits({ limit: 10, token })
      if (response.data.length < 10) {
        setWasLastList(true)
        return
      }
      setTwits(twits.concat(response.data))
      setToken(response.nextToken)
      setIsFetchMore(false)
    }

    if (!wasLastList && isFetchMore) {
      fetchData()
    }
  }, [token, wasLastList, twits, isFetchMore])

  return (
    <div>
      {twits.map(twit => (
        <Twit key={twit.id} data={twit} />
      ))}
      {wasLastList && (
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

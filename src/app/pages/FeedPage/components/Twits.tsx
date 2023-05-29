import * as React from 'react'
import 'index.css'

import TwitsUnit from 'app/pages/FeedPage/components/TwitsUnit'
import { getTwits } from 'app/api/twits'

type twit = {
  id: number
  author: {
    id: number
    username: string
    nickname: string
    email: string
    createdAt: Date
    updatedAt: Date
  }
  content: string
  createdAt: Date
  updatedAt: Date
}

export default function Twits() {
  const [token, setToken] = React.useState<string>() // storing current page number
  const [twits, setTwits] = React.useState<twit[]>([])
  const [isFetchMore, setIsFetchMore] = React.useState(true)
  const [wasLastList, setWasLastList] = React.useState(false) // setting a flag to know the last list

  // TODO attach to window
  const onScroll = () => {
    console.log('AAAAAAAAAAAAAAAAA')
    if (
      document.documentElement.scrollTop +
        document.documentElement.clientHeight ===
      document.documentElement.scrollHeight
    ) {
      console.log('NEED TO FETCH MORE!')
      setIsFetchMore(true)
    }
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await getTwits({ limit: 10 }) //token
      if (!response.data.length) {
        setWasLastList(true)
        return
      }
      setTwits(twits.concat(response.data))
      setToken(response.token)
      setIsFetchMore(false)
    }

    if (!wasLastList && isFetchMore) {
      fetchData()
    }
  }, [token, wasLastList, twits])

  // const [location, setLocation] = React.useState('')
  // const [pokemon, setPokemon] = React.useState('')
  // React.useEffect(() => {
  //   const locationID = randLocation()
  //   getLocation(locationID).then(location => setLocation(location))
  //   getPokemon(locationID).then(pokemon => setPokemon(pokemon))
  //   getMessageFromGPT(pokemon, location).then(
  //     message => (twitsList[0].data.text = message),
  //   )
  // }, [])

  return (
    <div onScroll={onScroll}>
      {twits.map(twit => {
        return <TwitsUnit key={twit.id} data={twit} />
      })}
    </div>
  )
}

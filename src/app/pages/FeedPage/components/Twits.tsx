import * as React from 'react'
import 'index.css'
import TwitsUnit, {
  TwitUnitProps,
} from 'app/pages/FeedPage/components/TwitsUnit'
import { getLocation, getPokemon, randLocation } from 'app/api/services'

type TwitsProps = {
  twitsList: TwitUnitProps[]
}

export default function Twits(props: TwitsProps) {
  const { twitsList } = props
  // eslint-disable-next-line
  const [location, setLocation] = React.useState('')
  // eslint-disable-next-line
  const [pokemon, setPokemon] = React.useState('')

  React.useEffect(() => {
    const locationID = randLocation()
    getLocation(locationID).then(location => setLocation(location))
    getPokemon(locationID).then(pokemon => setPokemon(pokemon))
    // getMessageFromGPT(pokemon, location).then(
    //   message => (twitsList[0].data.text = message),
    // )
  }, [])

  return (
    <>
      {twitsList.map(twit => {
        return <TwitsUnit key={twit.data.id} data={twit.data} />
      })}
    </>
  )
}

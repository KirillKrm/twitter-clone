import * as React from 'react'
import 'index.css'
import { Twit } from 'types/Twit'
import TwitsUnit from 'app/components/TwitsUnit'

const apiUrl = 'https://pokeapi.co/api/v2'

const getData = async (url: string) => {
  return fetch(url).then(res => res.json())
}

async function getLocation(locationId: number): Promise<string> {
  const url = `${apiUrl}/location-area/${locationId}`
  const location = await getData(url)
  const locationName = location.names[0].name

  return locationName as string
}

async function getPokemon(
  locationId: number,
  pokemonId: number,
): Promise<string> {
  const url = `${apiUrl}/location-area/${locationId}`
  const location = await getData(url)
  const pokemonName = location.pokemon_encounters[pokemonId].pokemon.name

  return pokemonName as string
}

type TwitsProps = {
  twitsList: { data: Twit }[]
}

export default function Twits(props: TwitsProps) {
  const { twitsList } = props
  const [location, setLocation] = React.useState('')
  const [pokemon, setPokemon] = React.useState('')

  React.useEffect(() => {
    getLocation(1).then(location => setLocation(location))
    getPokemon(1, 1).then(pokemon => setPokemon(pokemon))
  }, [])

  twitsList[0].data.text = `OMG! When I was walking in the ${location}, I met the ${pokemon}.`

  return (
    <>
      {twitsList.map(twit => {
        return <TwitsUnit key={twit.data.id} data={twit.data} />
      })}
    </>
  )
}

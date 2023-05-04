import * as React from 'react'
import 'index.css'
import TwitsUnit, { TwitUnitProps } from 'app/components/TwitsUnit'

const apiUrl = 'https://pokeapi.co/api/v2'
//TODO helth check of chatGPT
const API_KEY_GPT = process.env.REACT_APP_API_KEY_GPT

const getData = async (url: string) => {
  return fetch(url).then(res => res.json())
}

async function getLocation(locationId: number): Promise<string> {
  const url = `${apiUrl}/location-area/${locationId}`
  const location = await getData(url)
  const locationName = location.names[0].name

  return locationName as string
}

async function getPokemon(locationId: number): Promise<string> {
  const url = `${apiUrl}/location-area/${locationId}`
  const location = await getData(url)
  const pokemonsAmount = location.pokemon_encounters.length
  const pokemonName =
    location.pokemon_encounters[randPokemon(pokemonsAmount)].pokemon.name

  return pokemonName as string
}

async function getMessageFromGPT(
  pokemon: string,
  location: string,
): Promise<string> {
  const apiRequestBody = {
    model: 'text-babbage-001',
    prompt: `You are a Pokemon trainer. Write a twitter post about how you met the ${pokemon} in the ${location}`,
    max_tokens: 256,
    temperature: 1,
  }

  let messageText = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY_GPT}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(apiRequestBody),
  })
    .then(data => data.json())
    .then(data => data.choices[0].text)

  return messageText
}

function randLocation() {
  const totalLocations = 76
  return Math.floor(Math.random() * (totalLocations - 1) + 1)
}

function randPokemon(totalPokemons: number) {
  return Math.floor(Math.random() * totalPokemons)
}

type TwitsProps = {
  twitsList: TwitUnitProps[]
}

export default function Twits(props: TwitsProps) {
  const { twitsList } = props
  const [location, setLocation] = React.useState('')
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

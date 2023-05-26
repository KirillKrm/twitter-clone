// TODO move to separate lib
import fetchApi from './fetch'
import { SignUpPayload } from 'app/pages/SignupPage/types'

const API_KEY_GPT = process.env.REACT_APP_API_KEY_GPT

const pokeApiUrl = 'https://pokeapi.co/api/v2'
export function randLocation() {
  const totalLocations = 76
  return Math.floor(Math.random() * (totalLocations - 1) + 1)
}

export function randPokemon(totalPokemons: number) {
  return Math.floor(Math.random() * totalPokemons)
}

export async function getLocation(locationId: number): Promise<string> {
  const url = `${pokeApiUrl}/location-area/${locationId}`
  const location = await fetchApi(url)
  const locationName = location.names[0].name

  return locationName as string
}

export async function getPokemon(locationId: number): Promise<string> {
  const url = `${pokeApiUrl}/location-area/${locationId}`
  const location = await fetchApi(url)
  const pokemonsAmount = location.pokemon_encounters.length
  const pokemonName =
    location.pokemon_encounters[randPokemon(pokemonsAmount)].pokemon.name

  return pokemonName as string
}

export async function getMessageFromGPT(
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

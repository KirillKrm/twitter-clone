const fetchApi = async (url: string) => {
  try {
    const response = await fetch(url)
    const json = await response.json()
    return json
  } catch (error) {
    console.log('Error in fetch api')
  }
}

export default fetchApi

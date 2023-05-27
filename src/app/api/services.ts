import { SignUpPayload } from 'app/pages/SignupPage/types'

const backendUrl = 'https://twitter-clone2023-0.herokuapp.com'

export function randLocation() {
  const totalLocations = 76
  return Math.floor(Math.random() * (totalLocations - 1) + 1)
}

// interface ResponseFromApi {
//   status: number,
//   metadata: any
// }

// type successfulReponse<T> = ResponseFromApi & {
//   status: 200 | 201 | 204,
//   data: T
// }

// type failResponse = ResponseFromApi & {
//   status: 400 | 401 | 404 | 409 | 500 | 501
//   message: string
// }
// type ActualTypeOfEntity = { a: string }
// const actualResponse: successfulReponse<ActualTypeOfEntity> | failResponse = await callFromBackend(...)
// if ([200, 201, 204].includes(actualResponse.status)) {
//   const { data } = actualResponse as successfulReponse<ActualTypeOfEntity>
//   // ...
// } else if ([400, 401, 404, 409, 500, 501].includes(actualResponse.status)) {
//   const { message } = actualResponse as failResponse
//   console.log(message)
// } else {
//   throw new Error('Not expected backend response status')
// }

// TODO more types
type backendCallResponse<T> = {
  status: number
  data: T
}

async function backendCall<T = any>(
  path: string,
  requestOptions: RequestInit,
): Promise<backendCallResponse<T>> {
  const url = `${backendUrl}/${path}`

  const res = await fetch(url, requestOptions)
  return {
    status: res.status,
    data: await res.json(),
  }
}

// TODO types
export async function register(registerData: SignUpPayload): Promise<any> {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Access-Control-Allow-Origin', '*') //TODO check if works without this line

  const res = await backendCall('v1/auth/register', {
    method: 'POST',
    headers,
    body: JSON.stringify(registerData),
  })
  if (res.status !== 201) {
    throw new Error(`${res.status}: ${res.data.message}`)
  }

  console.log('Fetched user ' + res.data.id)

  return res.data
}

// TODO types
export async function login(loginData: {
  [any: string]: string
}): Promise<any> {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  const res = await backendCall('v1/auth/login', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(loginData),
  })
  if (res.status !== 200) {
    throw new Error(`${res.status}: ${res.data.message}`)
  }

  console.log('Login user ' + loginData.id)

  return res.data
}

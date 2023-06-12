import { SignUpPayload } from 'app/pages/SignupPage/types'
import { apiClient } from './api-client'

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

// TODO types
export async function register(registerData: SignUpPayload): Promise<any> {
  const res = await apiClient.post(
    'v1/auth/register',
    registerData,
    async (res, body) => {
      if (res.status !== 201) {
        throw new Error(`${res.status}: ${body.message}`)
      }
    },
  )

  console.log('Fetched user ' + res.id)

  return res
}

// TODO types
export async function login(loginData: {
  username: string
  password: string
}): Promise<any> {
  const res = await apiClient.post(
    'v1/auth/login',
    loginData,
    async (res, body) => {
      if (res.status !== 200) {
        throw new Error(`${res.status}: ${body.message}`)
      }
    },
  )

  console.log('Login user ' + loginData.username)

  return res
}

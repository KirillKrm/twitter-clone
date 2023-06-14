import jwt_decode, { JwtPayload } from 'jwt-decode'

import { JwtTokens } from 'types/JwtTokens'

type HandleResponse<T = unknown> = (res: Response, body: T) => Promise<void>

type ApiRequestOptions<T = unknown> = {
  body?: T
  handleResponse?: HandleResponse<T> //TODO
}

export class ApiClient {
  private readonly defaultHeaders: Headers = Object.assign(new Headers(), {
    'Content-Type': 'application/json',
  })

  constructor(private readonly backendUrl: string) {}

  private getUrl(path: string): string {
    return `${this.backendUrl}/${path}`
  }

  private async defaultHandleResponse(response: Response): Promise<void> {
    if (!response.ok) {
      throw new Error('Default response handler caught not 200 status')
    }
  }

  private async handleResponse<T>(
    response: Response,
    handleResponse?: HandleResponse<T>, //TODO here types in template
  ): Promise<T> {
    const body = await response.json()

    if (handleResponse) {
      await handleResponse(response, body)
    } else {
      await this.defaultHandleResponse(response)
    }

    return body
  }

  private isJwtExpired(jwt: string): boolean {
    const { exp } = jwt_decode<JwtPayload>(jwt)

    if (!exp) {
      throw new Error('The token has invalid expire time')
    }

    return (exp as number) * 1000 < Date.now()
  }

  private redirectToLogin() {
    return window.location.replace('/login')
  }

  private async handleAutorizationHeader(headers: Headers): Promise<void> {
    const accessToken = localStorage.getItem('jwtAccessToken')
    if (!accessToken) {
      return
    }

    if (!this.isJwtExpired(accessToken)) {
      headers['Authorization'] = `Bearer ${accessToken}`
      return
    }

    localStorage.removeItem('jwtAccessToken')

    const refreshToken = localStorage.getItem('jwtRefreshToken')
    if (!refreshToken || this.isJwtExpired(refreshToken)) {
      localStorage.removeItem('jwtRefreshToken')
      this.redirectToLogin()
      return
    }

    const tokens = await this.post<JwtTokens>(
      'v1/auth/refresh',
      { refreshToken },
      async res => {
        if (res.status !== 200) {
          this.redirectToLogin()
        }
      },
    )

    localStorage.setItem('jwtAccessToken', tokens.jwtAccessToken)
    headers['Authorization'] = `Bearer ${tokens.jwtAccessToken}`
  }

  private async getHeaders(): Promise<Headers> {
    const headers = Object.assign({}, this.defaultHeaders)

    await this.handleAutorizationHeader(headers)

    return headers
  }

  private async request<T = unknown>(
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
    path: string,
    options: ApiRequestOptions<T>,
  ): Promise<T> {
    if ((method === 'GET' || method === 'DELETE') && !!options.body) {
      throw new Error('GET and DELETE api requests do not have body')
    }

    try {
      const response = await fetch(this.getUrl(path), {
        method,
        headers: await this.getHeaders(),
        body: options.body ? JSON.stringify(options.body) : undefined,
      })

      return this.handleResponse<T>(response, options.handleResponse)
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async get<T = unknown>(
    path: string,
    handleResponse?: HandleResponse<T>,
  ): Promise<T> {
    return this.request('GET', path, {
      handleResponse,
    })
  }

  async post<T = unknown>(
    path: string,
    body: any,
    handleResponse?: HandleResponse<T>,
  ): Promise<T> {
    return this.request('POST', path, {
      body,
      handleResponse,
    })
  }

  async patch<T = unknown>(
    path: string,
    handleResponse?: HandleResponse<T>,
  ): Promise<T> {
    return this.request('PATCH', path, { handleResponse })
  }

  async delete<T = unknown>(
    path: string,
    handleResponse?: HandleResponse<T>,
  ): Promise<T> {
    return this.request('DELETE', path, { handleResponse })
  }
}

export const apiClient = new ApiClient(
  process.env.REACT_APP_BACKEND_URL as string,
)

import jwt_decode from 'jwt-decode'

type HandleResponse<T = any> = (res: Response, body: T) => Promise<void>

type ApiRequestOptions<T = any> = {
  body?: T
  handleResponse?: HandleResponse //TODO
}

export class ApiClient {
  private readonly defaultHeaders: Headers = Object.assign(new Headers(), {
    'Content-Type': 'application/json',
  })

  constructor(private readonly backendUrl: string) {}

  private getUrl(path: string): string {
    return `${this.backendUrl}/${path}`
  }

  // TODO types
  private async defaultHandleResponse(response, body): Promise<void> {
    if (!response.ok) {
      throw new Error('Default response handler caught not 200 status')
    }
  }

  // TODO types
  private async handleResponse(response, handleResponse?: HandleResponse) {
    const body = await response.json()

    if (handleResponse) {
      await handleResponse(response, body)
    } else {
      await this.defaultHandleResponse(response, body)
    }

    return body
  }

  // TODO types
  private isJwtExpired(jwt: string): boolean {
    const { exp } = jwt_decode<any>(jwt)

    return exp * 1000 < Date.now()
  }

  private redirectToLogin() {
    return window.location.replace('/login')
  }

  private async handleAutorizationHeader(headers: Headers): Promise<void> {
    const accessToken = localStorage.getItem('jwtAccessToken')
    if (accessToken) {
      if (!this.isJwtExpired(accessToken)) {
        headers['Authorization'] = `Bearer ${accessToken}`
      } else {
        localStorage.removeItem('jwtAccessToken')

        const refreshToken = localStorage.getItem('jwtRefreshToken')
        if (refreshToken && !this.isJwtExpired(refreshToken)) {
          const res = await this.post(
            'v1/auth/refresh',
            { refreshToken },
            async res => {
              if (res.status !== 200) {
                this.redirectToLogin()
              }
            },
          )

          localStorage.setItem('jwtAccessToken', res.jwtAccessToken)
          headers['Authorization'] = `Bearer ${res.jwtAccessToken}`
        } else {
          localStorage.removeItem('jwtRefreshToken')
          this.redirectToLogin()
        }
      }
    }
  }

  private async getHeaders(): Promise<Headers> {
    const headers = Object.assign({}, this.defaultHeaders)

    await this.handleAutorizationHeader(headers)

    return headers
  }

  // TODO types
  private async request(
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
    path: string,
    options: ApiRequestOptions = {},
  ): Promise<any> {
    if ((method === 'GET' || method === 'DELETE') && !!options.body) {
      throw new Error('GET and DELETE api requests do not have body')
    }

    try {
      const response = await fetch(this.getUrl(path), {
        method,
        headers: await this.getHeaders(),
        body: options.body ? JSON.stringify(options.body) : undefined,
      })

      return this.handleResponse(response, options.handleResponse)
    } catch (error) {
      console.error(error)
    }
  }

  // TODO types
  async get(path: string, handleResponse?: HandleResponse): Promise<any> {
    return this.request('GET', path, {
      handleResponse,
    })
  }

  // TODO types
  async post(
    path: string,
    body: { [key: string]: any },
    handleResponse?: HandleResponse,
  ): Promise<any> {
    return this.request('POST', path, {
      body,
      handleResponse,
    })
  }

  // TODO types
  async patch(path: string, handleResponse?: HandleResponse): Promise<any> {
    return this.request('PATCH', path, { handleResponse })
  }

  // TODO types
  async delete(path: string, handleResponse?: HandleResponse): Promise<any> {
    return this.request('DELETE', path, { handleResponse })
  }
}

export const apiClient = new ApiClient(
  process.env.REACT_APP_BACKEND_URL as string,
)

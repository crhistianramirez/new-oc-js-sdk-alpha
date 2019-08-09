import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import tokenService from '../api/Tokens'
import Configuration from '../configuration'
import { DecodedToken } from '../models/DecodedToken'
import Auth from '../api/Auth'

class HttpClient {
  private _session: AxiosInstance

  constructor() {
    // create a new instance so we avoid clashes with any
    // configurations done on default axios instance that
    // a consumer of this SDK might use
    this._session = axios.create()
  }

  public get = async (
    path: string,
    config?: AxiosRequestConfig
  ): Promise<any> => {
    const requestConfig = await this._buildRequestConfig(config)
    const response = await this._session.get(
      `${Configuration.Get().baseApiUrl}${path}`,
      requestConfig
    )
    return response.data
  }

  public post = async (
    path: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<any> => {
    const requestConfig = await this._buildRequestConfig(config)
    const response = await this._session.post(
      `${Configuration.Get().baseApiUrl}${path}`,
      data,
      requestConfig
    )
    return response.data
  }

  public put = async (
    path: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<any> => {
    const requestConfig = await this._buildRequestConfig(config)
    const response = await this._session.put(
      `${Configuration.Get().baseApiUrl}${path}`,
      data,
      requestConfig
    )
    return response.data
  }

  public patch = async (
    path: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<any> => {
    const requestConfig = await this._buildRequestConfig(config)
    const response = await this._session.patch(
      `${Configuration.Get().baseApiUrl}${path}`,
      data,
      requestConfig
    )
    return response.data
  }

  public delete = async (path: string, config: AxiosRequestConfig) => {
    const requestConfig = await this._buildRequestConfig(config)
    const response = await this._session.delete(
      `${Configuration.Get().baseApiUrl}${path}`,
      requestConfig
    )
    return response.data
  }

  // sets the token on every outgoing request, will attempt to
  // refresh the token if the token is expired and there is a refresh token set
  private async _tokenInterceptor(
    config: AxiosRequestConfig
  ): Promise<AxiosRequestConfig> {
    let token = this._getToken(config)
    if (this._isTokenExpired(token)) {
      token = await this._tryRefreshToken(token)
    }
    config.headers.Authorization = `Bearer ${token}`
    return config
  }

  private _getToken(config: AxiosRequestConfig): string {
    let token
    if (config.params.accessToken) {
      token = config.params.accessToken
    } else if (config.params.impersonating) {
      token = tokenService.GetImpersonationToken()
    } else {
      token = tokenService.GetAccessToken()
    }

    // strip out axios params that we'vee hijacked for our own nefarious purposes
    delete config.params.accessToken
    delete config.params.impersonating
    return token
  }

  private _isTokenExpired(token: string): boolean {
    if (!token) {
      return true
    }
    const decodedToken = this._parseJwt(token)
    const currentSeconds = Date.now() / 1000
    const currentSecondsWithBuffer = currentSeconds - 10
    return decodedToken.exp < currentSecondsWithBuffer
  }

  private async _tryRefreshToken(accessToken: string): Promise<string> {
    const refreshToken = tokenService.GetRefreshToken()
    if (!refreshToken) {
      return accessToken || ''
    }
    const sdkConfig = Configuration.Get()
    if (!accessToken && !sdkConfig.clientID) {
      return accessToken || ''
    }
    let clientID
    if (accessToken) {
      const decodedToken = this._parseJwt(accessToken)
      clientID = decodedToken.cid
    }
    if (sdkConfig.clientID) {
      clientID = sdkConfig.clientID
    }
    const refreshRequest = await Auth.RefreshToken(refreshToken, clientID)
    return refreshRequest.access_token
  }

  private _parseJwt(token: string): DecodedToken {
    let base64Url = token.split('.')[1]
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    let jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    )

    return JSON.parse(jsonPayload)
  }

  private _buildRequestConfig(
    config?: AxiosRequestConfig
  ): Promise<AxiosRequestConfig> {
    const sdkConfig = Configuration.Get()
    const requestConfig = {
      ...config,
      timeout: sdkConfig.timeoutInMilliseconds,
      headers: {
        'Content-Type': 'application/json',
      },
    }
    return this._tokenInterceptor(requestConfig)
  }
}

export default new HttpClient()

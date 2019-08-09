import axios, { AxiosInstance } from 'axios'
import { AccessToken } from '../models/AccessToken'
import Configuration from '../configuration'
import { SecurityProfile } from '../models/SecurityProfile'

class Auth {
  private _http: AxiosInstance
  constructor() {
    // create a new instance so we avoid clashes with any
    // configurations done on default axios instance that
    // a consumer of this SDK might use
    this._http = axios.create()
  }

  /**
   * @description this workflow is most appropriate for client apps where user is a human, ie a registered user
   *
   * @param username of the user logging in
   * @param password of the user logging in
   * @param client_id of the application the user is logging into
   * @param scope roles being requested - space delimited string or array
   */
  public async Login(
    username: string,
    password: string,
    clientID: string,
    scope: Array<SecurityProfile['Roles']>
  ): Promise<AccessToken> {
    const body = {
      grant_type: 'password',
      username,
      password,
      client_id: clientID,
      scope: scope.join(' '),
    }
    const configuration = Configuration.Get()
    const response = await this._http.post(
      configuration.baseAuthUrl,
      this.asQueryString(body),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
      }
    )
    return response.data
  }

  /**
   * @description similar to login except client secret is also required, adding another level of security
   *
   * @param clientSecret of the application
   * @param username of the user logging in
   * @param password of the user logging in
   * @param clientID of the application the user is logging into
   * @param scope roles being requested - space delimited string or array
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public async ElevatedLogin(
    clientSecret: string,
    username: string,
    password: string,
    clientID: string,
    scope: Array<SecurityProfile['Roles']>
  ): Promise<AccessToken> {
    const body = {
      grant_type: 'client_credentials',
      scope: scope.join(' '),
      client_id: clientID,
      username,
      password,
      client_secret: clientSecret,
    }
    const configuration = Configuration.Get()
    const response = await this._http.post(
      configuration.baseAuthUrl,
      this.asQueryString(body),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
      }
    )
    return response.data
  }

  /**
   * @description this workflow is best suited for a backend system
   *
   * @param clientSecret of the application
   * @param clientID of the application the user is logging into
   * @param scope roles being requested - space delimited string or array
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public async ClientCredentials(
    clientSecret: string,
    clientID: string,
    scope: Array<SecurityProfile['Roles']>
  ): Promise<AccessToken> {
    const body = {
      grant_type: 'password',
      scope: scope.join(' '),
      client_id: clientID,
      client_secret: clientSecret,
    }
    const configuration = Configuration.Get()
    const response = await this._http.post(
      configuration.baseAuthUrl,
      this.asQueryString(body),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
      }
    )
    return response.data
  }

  /**
   * @description extend your users' session by getting a new access token with a refresh token. refresh tokens must be enabled in the dashboard
   *
   * @param refreshToken of the application
   * @param clientID of the application the user is logging into
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public async RefreshToken(
    refreshToken: string,
    clientID: string
  ): Promise<AccessToken> {
    const body = {
      grant_type: 'refresh_token',
      client_id: clientID,
      refresh_token: refreshToken,
    }
    const configuration = Configuration.Get()
    const response = await this._http.post(
      configuration.baseAuthUrl,
      this.asQueryString(body),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
      }
    )
    return response.data
  }

  /**
   * @description allow users to browse your catalog without signing in - must have anonymous template user set in dashboard
   *
   * @param clientID of the application the user is logging into
   * @param scope roles being requested - space delimited string or array
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public async Anonymous(
    clientID: string,
    scope: Array<SecurityProfile['Roles']>
  ): Promise<AccessToken> {
    const body = {
      grant_type: 'client_credentials',
      client_id: clientID,
      scope: scope.join(' '),
    }
    const configuration = Configuration.Get()
    const response = await this._http.post(
      configuration.baseAuthUrl,
      this.asQueryString(body),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
      }
    )
    return response.data
  }

  private asQueryString(body: { [key: string]: string }): string {
    const keys = Object.keys(body)
    let queryStringArray = keys.map(
      key => `${key}=${encodeURIComponent(body[key])}`
    )
    return queryStringArray.join('&')
  }
}

export default new Auth()

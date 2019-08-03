import cookies from '../utils/cookieService'

// idenify whether code is running in a node environment
// if so, tokens will be stored on the sdk instance
// else if in browser environment tokens will be stored in cookies
const isNode = new Function(
  'try {return this===global;}catch(e){return false;}'
)
class Tokens {
  private accessTokenCookieName = `ordercloud.access-token`
  private impersonationTokenCookieName = 'ordercloud.impersonation-token'
  private refreshTokenCookieName = 'ordercloud.refresh-token'

  private accessToken?: string = null
  private impersonationToken?: string = null
  private refreshToken?: string = null

  /**
   * Manage Access Tokens
   */

  public getAccess(): string {
    return isNode ? this.accessToken : cookies.get(this.accessTokenCookieName)
  }

  public setAccess(token: string): void {
    isNode
      ? (this.accessToken = token)
      : cookies.set(this.accessTokenCookieName, token)
  }

  public removeAccess(): void {
    isNode
      ? (this.accessToken = '')
      : cookies.remove(this.accessTokenCookieName)
  }

  /**
   * Manage Impersonation Tokens
   */

  public getImpersonation(): string {
    return isNode
      ? this.impersonationToken
      : cookies.get(this.impersonationTokenCookieName)
  }

  public setImpersonation(token: string): void {
    isNode
      ? (this.impersonationToken = token)
      : cookies.set(this.impersonationTokenCookieName, token)
  }

  public removeImpersonation(): void {
    isNode
      ? (this.impersonationToken = null)
      : cookies.remove(this.impersonationTokenCookieName)
  }

  /**
   * Manage Refresh Tokens
   */

  public getRefresh(): string {
    return isNode ? this.refreshToken : cookies.get(this.refreshTokenCookieName)
  }

  public setRefresh(token: string): void {
    isNode
      ? (this.refreshToken = token)
      : cookies.set(this.refreshTokenCookieName, token)
  }

  public removeRefresh(): void {
    isNode
      ? (this.refreshToken = null)
      : cookies.remove(this.refreshTokenCookieName)
  }
}

export default new Tokens()

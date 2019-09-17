import mockAxios from './__mocks__/axios'
import { Tokens, Me, Users, Products } from '../src/index'
import { makeToken } from './utils'

const apiUrl = 'https://api.ordercloud.io/v1'
const validToken = makeToken()

beforeEach(() => {
  jest.clearAllMocks() // cleans up any tracked calls before the next test
  Tokens.RemoveImpersonationToken()
})

interface MyUser extends User<MyUserXP> {}

interface User<T> {
  ID: string
  Name: string
  xp: T
}

interface MyUserXP {
  blah: string
}

// TODO: copy paste these examples into readme

test('can filter call with boolean', async () => {
  Tokens.SetAccessToken(validToken)
  await Me.ListProducts({ filters: { 'xp.Featured': true } })
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith(`${apiUrl}/me/products`, {
    params: {
      'xp.Featured': true,
    },
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${validToken}`,
    },
  })
})

test('can filter call with comparison operator', async () => {
  Tokens.SetAccessToken(validToken)
  await Me.ListOrders({ filters: { DateSubmitted: '>2018-04-20' } })
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith(`${apiUrl}/me/orders`, {
    params: {
      DateSubmitted: '>2018-04-20',
    },
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${validToken}`,
    },
  })
})

test('can filter call with wildcard operator', async () => {
  Tokens.SetAccessToken(validToken)
  await Users.List('my-mock-buyerid', { filters: { LastName: 'Smith*' } })
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith(
    `${apiUrl}/buyers/my-mock-buyerid/users`,
    {
      params: {
        LastName: 'Smith*',
      },
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${validToken}`,
      },
    }
  )
})

test('can filter with logical OR operator', async () => {
  Tokens.SetAccessToken(validToken)
  await Users.List('my-mock-buyerid', {
    filters: { LastName: 'Smith*|*Jones' },
  })
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith(
    `${apiUrl}/buyers/my-mock-buyerid/users`,
    {
      params: {
        LastName: 'Smith*|*Jones',
      },
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${validToken}`,
      },
    }
  )
})

test('can filter with logical AND operator', async () => {
  Tokens.SetAccessToken(validToken)
  await Products.List({ filters: { 'xp.Color': ['!red', '!blue'] } })
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith(`${apiUrl}/products`, {
    params: {
      'xp.Color': ['!red', '!blue'],
    },
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${validToken}`,
    },
  })
})

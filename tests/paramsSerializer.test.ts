import serialize from '../src/utils/paramsSerializer'

test('should serialize top-level params', () => {
  const params = {
    DateSubmitted: '>2018-04-20',
  }
  expect(serialize(params)).toBe('DateSubmitted=%3E2018-04-20')
})

it('should handle filters', () => {
  const params = {
    filters: {
      LastName: 'Smith*',
    },
  }
  expect(serialize(params)).toBe('LastName=Smith*')
})

it('should handle arrays on filters', () => {
  const params = {
    filters: {
      'xp.Color': ['!red', '!blue'],
    },
  }
  expect(serialize(params)).toBe('xp.Color=!red&xp.Color=!blue')
})

it('should handle mixed arrays and values filters', () => {
  const params = {
    FirstName: 'Bob',
    filters: {
      'xp.Color': ['!red', '!blue'],
    },
  }
  expect(serialize(params)).toBe('xp.Color=!red&xp.Color=!blue&FirstName=Bob')
})

it('should throw if value is null', () => {
  const params = {
    FirstName: null,
  }
  expect(() => serialize(params)).toThrowError(
    `Parameter FirstName was null. This is not valid syntax. If you meant to define the absence of a property then instead combine the negation and wildcard operator !* `
  )
})

it('should ignore undefined values', () => {
  const params = {
    FirstName: 'Bob',
    LastName: undefined,
    'xp.FavoriteColor': 'red',
  }
  expect(serialize(params)).toBe('FirstName=Bob&xp.FavoriteColor=red')
})

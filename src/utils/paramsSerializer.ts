export default function ParamSerializer(params: {
  [key: string]: any
}): string {
  let valuesArray: string[] = []

  // serialize filters first, they are handled specially
  const filters = params.filters
  if (filters) {
    for (const key in filters) {
      const filterVal = filters[key]
      if (filterVal === null) {
        throw new Error(
          `Parameter ${key} was null. This is not valid syntax. If you meant to define the absence of a property then instead combine the negation and wildcard operator !* `
        )
      }
      if (Array.isArray(filterVal)) {
        filterVal.forEach(val =>
          valuesArray.push(`${key}=${encodeURIComponent(val)}`)
        )
      } else if (filterVal) {
        valuesArray.push(`${key}=${encodeURIComponent(filterVal)}`)
      }
    }
    delete params.filter
  }

  // serialize the rest of the params
  for (const key in params) {
    const val = params[key]
    if (val) {
      valuesArray.push(`${key}=${encodeURIComponent(val)}`)
    }
  }

  return valuesArray.length ? `${valuesArray.join('&')}` : ''
}

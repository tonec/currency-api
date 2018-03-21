import currencyMap from './currencyMap'

export default code => {
  return currencyMap[code] ? currencyMap[code] : null
}

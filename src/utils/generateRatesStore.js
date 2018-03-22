import { Rate } from '../models'
import getCurrencyDetail from './getCurrencyDetail'

export default quotes => {
  let rates = []

  for (let quote in quotes) {
    const detail = getCurrencyDetail(quote.slice(3))

    if (detail) {
      const rate = new Rate({
        name: detail.name,
        name_plural: detail.name_plural,
        symbol: detail.symbol,
        symbol_native: detail.symbol_native,
        decimal_digits: detail.decimal_digits,
        rounding: detail.rounding,
        currency_code: detail.code,
        country_code: detail.iso,
        quote: quotes[quote]
      })

      rates.push(rate)
    }
  }

  return Rate.insertMany(rates)
}

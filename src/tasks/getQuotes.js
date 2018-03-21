import axios from 'axios'
import fs from 'fs'
import Rate from '../models/rateModel'
import getCurrencyDetail from '../utils/getCurrencyDetail'
import data from '../test/data/rates.json'

const url = 'http://www.apilayer.net/api/live?access_key=9454f08e4dc198406fc37bb79babbbec&format=1'

function clearRatesCollection () {
  Rate.remove({}).catch(error => {
    console.log('clearRatesCollection error: ', error)
  })
}

export default () => {
  clearRatesCollection()

  axios.get(url)
    .then(response => {
      const { quotes } = data
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
            value: quotes[quote]
          })

          rates.push(rate)
        }
      }

      Rate.insertMany(rates).catch(error => {
        console.log('Error: ', error)
      })
    })
}

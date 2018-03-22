import axios from 'axios'
import generateRatesStore from '../utils/generateRatesStore'
import { Rate } from '../models'
import data from '../test/data/quotes.json'

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
      if (Object.keys(quotes).length > 0) {
        generateRatesStore(quotes)
      }
    })
    .catch(error => console.log('Error generate rates store', error))
}

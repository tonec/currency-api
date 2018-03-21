import schedule from 'node-schedule'
import axios from 'axios'
import Rate from '../models/rateModel'

const url = 'http://www.apilayer.net/api/live?access_key=9454f08e4dc198406fc37bb79babbbec&format=1'

module.exports = () => {

  axios.get(url)
    .then(response => {
      const { quotes } = response.data
      let rates = []

      for (let quote in quotes) {
        const rate = new Rate({
          code: quote,
          value: quotes[quote]
        })

        rates.push(rate)
      }

      Rate.insertMany(rates).then(res => {
        console.log(res)
      }).catch(error => {
        console.log('Error: ', error)
      })
    })

  // schedule.scheduleJob('* */2 * * * *', () => {
    // axios.get(url)
    //   .then(response => {
    //     const data = JSON.parse(response)

    //     console.log(data.quotes)
    //   })
  // })
}

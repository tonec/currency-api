import schedule from 'node-schedule'
import getQuotes from './getQuotes'

module.exports = () => {
  getQuotes()

  // schedule.scheduleJob('* */2 * * * *', () => {
  //   getQuotes()
  // })
}

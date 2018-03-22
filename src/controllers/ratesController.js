import { Rate } from '../models'
import format from '../utils/format'

export default {
  query: (req, res, next) => {
    Rate.find({})
      .then(rates => {
        res.json(format('quotes', rates))
      })
      .catch(next)
  }
}

import ratesController from '../controllers/ratesController'
import config from '../../config'

const path = config.basePath

export default app => {
  app.get(path('/rates'), ratesController.query)
}

import mongoose from 'mongoose'
import config from '../../config'

before(done => {
  mongoose.connect(config.db.testUri)
  mongoose.connection
    .once('open', () => {
      console.log('Mongo connection open')
      done()
    })
    .on('error', error => {
      console.warn('Warning: ', error)
    })
})

beforeEach(done => {
  mongoose.connection.db.dropDatabase(() => done())
})

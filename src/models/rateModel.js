import mongoose from 'mongoose'
import rateSchema from '../schema/rateSchema'

export default mongoose.model('Rate', rateSchema)

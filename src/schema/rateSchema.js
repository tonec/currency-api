import mongoose from 'mongoose'

const rateSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  name_plural: {
    type: String,
    required: true
  },
  currency_code: {
    type: String,
    required: true
  },
  country_code: {
    type: String,
    required: true
  },
  symbol: {
    type: String,
    required: true
  },
  symbol_native: {
    type: String,
    required: true
  },
  decimal_digits: {
    type: Number,
    required: true
  },
  rounding: {
    type: Number,
    required: true
  },
  quote: {
    type: Number,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
})

export default rateSchema

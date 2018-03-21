import mongoose from 'mongoose'

const rateSchema = mongoose.Schema({
  code: {
    type: String,
    trim: true,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
})

export default rateSchema

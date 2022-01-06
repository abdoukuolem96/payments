const mongoose = require('mongoose')
const Schema = mongoose.Schema

const paymentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    cost: {
      type: String,
      required: true,
    },
    paid: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Payment = mongoose.model('Payment', paymentSchema)
module.exports = Payment

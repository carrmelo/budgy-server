const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  collector: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  months: [
    {
      type: String,
      required: true,
    },
  ],
  expiration: {
    type: Date,
    required: false,
  },
});

module.exports = mongoose.model('Payment', PaymentSchema);

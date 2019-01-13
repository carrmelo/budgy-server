const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
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
      type: 'String',
      required: false,
    },
  ],
});

module.exports = mongoose.model('Payment', PaymentSchema);

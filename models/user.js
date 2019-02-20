const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  income: {
    type: Number,
    required: true,
  },
  payments: [
    { payment: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment' } },
  ],
});

module.exports = mongoose.model('User', UserSchema);

const { Payment } = require('../models/payment');

exports.addPayment = async ctx => {
  try {
    const newPayment = new Payment(ctx.request.body);
    newPayment.save();
    ctx.status = 201;
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      errors: [e.message],
    };
  }
};

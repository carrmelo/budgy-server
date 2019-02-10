const { Payment } = require('../models');

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

exports.getPayments = async ctx => {
  try {
    ctx.body = await Payment.find();
    ctx.status = 200;
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      errors: [e.message],
    };
  }
};

exports.deletePayment = async ctx => {
  try {
    ctx.body = await Payment.findByIdAndDelete(ctx.request.body);
    ctx.status = 202;
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      errors: [e.message],
    };
  }
};

const { Payment } = require('../models');

exports.addPayment = async ctx => {
  try {
    console.log('antes');

    const newPayment = new Payment(ctx.request.body);
    console.log('despues');

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
    console.log('entre');
    ctx.status = 200;
    ctx.body = await Payment.find();
    console.log('entre');
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      errors: [e.message],
    };
  }
};

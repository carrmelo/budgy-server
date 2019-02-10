const router = require('koa-router')();

const { paymentController } = require('./controllers/');

router
  .post('/payments', paymentController.addPayment)
  .get('/payments', paymentController.getPayments)
  .delete('/payments/:payment_id', paymentController.deletePayment);

module.exports = router;

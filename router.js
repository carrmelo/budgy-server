const router = require('koa-router')();

const { userController, paymentController } = require('./controllers/');

router
  .post('/payments', paymentController.addPayment)
  .get('/payments', paymentController.getPayments)
  .delete('/payments/:payment_id', paymentController.deletePayment);

router.post('/user', userController.createUser);
module.exports = router;

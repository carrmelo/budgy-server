const router = require('koa-router')();

const { paymentController } = require('./controllers/');

router.post('/payment', paymentController.addPayment);

module.exports = router;

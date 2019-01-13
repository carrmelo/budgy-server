const router = require('koa-router')();

const { paymentController } = require('./controllers/payment.controller');

router.post('/payment', paymentController.addPet);

module.exports = router;

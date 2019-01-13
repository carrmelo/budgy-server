const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
require('./db');

const router = require('./router');

const app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(router.routes());

app.listen(PORT, err => {
  if (err) return console.erros('ERROR: ', err);
  return console.log(`Server running on ${PORT}`);
});

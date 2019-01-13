const Koa = require('koa');
require('./db');

const app = new Koa();
const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) return console.erros('ERROR: ', err);
  return console.log(`Server running on ${PORT}`);
});

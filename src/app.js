'use strict';

const PORT = 3000;
const Koa = require('koa');
const serve = require('koa-static');
const port = process.env.PORT || PORT;
const app = new Koa();


//app.use(serve('public'));

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server is started on ${port} port`);
  /* eslint-enable no-console */
});

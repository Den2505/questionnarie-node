'use strict';

const PORT = 3001;
const Koa = require('koa');
/* eslint-disable */
const serve = require('koa-static');
const port = process.env.PORT || PORT;
const app = new Koa();
/* eslint-disable */
const {sequelize, sequelizePromise} = require('./dao/models/index');
//app.use(serve('public'));
sequelizePromise.then(()=>{

    app.listen(port, () => {
        /* eslint-disable no-console */
        console.log(`Server is started on ${port} port`);
        /* eslint-enable no-console */
    });

})


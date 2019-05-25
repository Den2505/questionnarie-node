`use strict`;
const Router = require('koa-router');
const router = new Router();
const generalRouter = require('./general');

router.prefix('/api');
router
    .post('/answer', generalRouter.addAnswer)
    .get('/questionnaire', generalRouter.getQuestionnaire);
   // .get('/employees',null)


module.exports = router;
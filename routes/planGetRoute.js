const express = require('express');
const planGetRouter = express.Router();
const PlanGet = require('../controllers/planGet');



planGetRouter.route('/plan').get(PlanGet);


module.exports = planGetRouter;
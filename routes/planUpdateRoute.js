const express = require('express');
const planUpdateRouter = express.Router();
const planUpdate = require('../controllers/planUpdate');


planUpdateRouter.route('/:gasto').post(planUpdate);

module.exports = planUpdateRouter;
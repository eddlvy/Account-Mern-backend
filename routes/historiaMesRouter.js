const express = require('express');
const historiaMesRouter = express.Router();
const historiaGastosMes = require('../controllers/historiaGastosMesGet');


historiaMesRouter.route('/:mes').get(historiaGastosMes);

module.exports = historiaMesRouter;
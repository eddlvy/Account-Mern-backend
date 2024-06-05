const express = require('express');
const ingresosGetRouter = express.Router();
const ingresosGet = require('../controllers/ingresosGet');

ingresosGetRouter.route('/ingresos/:mes').get(ingresosGet)

module.exports = ingresosGetRouter;
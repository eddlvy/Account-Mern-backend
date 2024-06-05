const express = require('express');
const ingresosUpdateRouter = express.Router();
const ingresosUpdate = require('../controllers/ingresosUpdate')


ingresosUpdateRouter.route('/ingresos').post(ingresosUpdate);


module.exports = ingresosUpdateRouter;
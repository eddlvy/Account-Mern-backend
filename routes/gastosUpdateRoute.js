const express = require('express');
const gastosUpdateRouter = express.Router();
const updateGasto = require('../controllers/gastosUpdate');


gastosUpdateRouter.route('/gastosupdate/:mes/:gasto').post(updateGasto);

module.exports = gastosUpdateRouter






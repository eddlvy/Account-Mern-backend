const express = require('express');
const historiaRouter = express.Router();
const historiaGastosGet = require('../controllers/historiaGastosGet');


historiaRouter.route('/historia').get(historiaGastosGet);


module.exports = historiaRouter;
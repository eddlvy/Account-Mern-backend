const express = require('express');
const gastosGetRouter = express.Router();
const gastosGet = require('../controllers/gastosGet');


gastosGetRouter.route('/gastosget').get(gastosGet);


module.exports = gastosGetRouter;
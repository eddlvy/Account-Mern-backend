const express = require('express');
const mesRouter = express.Router();
const mesUpdate = require('../controllers/mes');


mesRouter.route('/mes').post(mesUpdate);


module.exports = mesRouter;
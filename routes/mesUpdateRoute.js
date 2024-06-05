const express = require('express');
const mesRouter = express.Router();
const mesUpdate = require('../controllers/mesUpdate');


mesRouter.route('/mes').post(mesUpdate);


module.exports = mesRouter;
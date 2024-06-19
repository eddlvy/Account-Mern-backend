const express = require('express');
const extrasUpdateRouter = express.Router();
const extrasUpdate = require('../controllers/extrasUpdate');


extrasUpdateRouter.route('/:mes').post(extrasUpdate);


module.exports = extrasUpdateRouter;
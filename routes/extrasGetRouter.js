const express = require('express');
const extrasGetRouter = express.Router();
const extrasGet = require('../controllers/extrasGet');


extrasGetRouter.route('/:mes').get(extrasGet);

module.exports = extrasGetRouter;
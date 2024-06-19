const express = require('express');
const extrasGetRouter = express.Router();
const extrasGet = require('../controllers/extrasGet');


historiaMesRouter.route('/:mes').get(extrasGet);

module.exports = extrasGetRouter;
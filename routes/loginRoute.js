const express = require('express');
const loginRouter = express.Router();
const loginUser = require('../controllers/userLogin');



loginRouter.route('/login').post(loginUser);

module.exports = loginRouter;

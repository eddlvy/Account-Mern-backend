const express = require('express');
const registerRouter = express.Router();
const registerUser = require('../controllers/userRegister')


registerRouter.route("/register").post(registerUser);

module.exports = registerRouter;
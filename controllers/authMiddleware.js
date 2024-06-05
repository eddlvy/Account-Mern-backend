const dotenv = require('dotenv').config({ path: "../controllers/authMiddleware" });
const jwt = require('jsonwebtoken');


const auth = (req, res, next) => {
  if (req.headers.authorization) {
    const data = req.headers.authorization;
    const token = data.split(' ')[1];
    jwt.verify(token, process.env.SECRET_KEY, (error, user) => {
      if (!error) {
        req.user = user;
        next()
      } else {
        return res.status(403).json({ error: "Usuario no Registrado" })
      }
    })
  } else {
    return res.status(403).json({ error: "Usuario no Autenticado " })
  }
}

module.exports = auth;
const dotenv = require('dotenv').config({ path: "../config/config.env" });
const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



const loginUser = async (req, res) => {
  try {
    const secret = process.env.SECRET_KEY;
    const { nombre, clave } = req.body;
    const user = await UserModel.findOne({ "nombre": nombre });
    if (!user) {
      return res.status(401).json({ error: "El Usuario no existe" })
    }
    const passwordMatch = await bcrypt.compare(clave, user.clave);
    if (!passwordMatch) {
      return res.status(401).json({ error: "EL nombre de usuario o la clave son incorrectos" })
    }
    let token = jwt.sign({ nombre: user.nombre }, secret, { expiresIn: 60 * 60 })
    req.session.authorization = { token, nombre };
    res.status(200).send(token);

  } catch (error) {
    return res.status(500).json({ error: "Autenticacion Fallo" })
  }
};


module.exports = loginUser;
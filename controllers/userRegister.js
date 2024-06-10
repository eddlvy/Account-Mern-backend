const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');


const registerUser = async (req, res) => {
  try {
    const { nombre, clave } = req.body;
    const checkUser = await UserModel.findOne({ "nombre": nombre });
    if (checkUser) {
      return res.json({ error: "El usuario ya existe" }).status(404)
    } else {
      const hashedPassword = await bcrypt.hash(clave, 12);
      const user = new UserModel({ nombre, clave: hashedPassword });
      await user.save();
      return res.status(201).json({ message: "Usuario Creado" })
    }

  } catch (error) {
    return res.status(500).json({ error: "Error en Registracion" })
  }
}


module.exports = registerUser;
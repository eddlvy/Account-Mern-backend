const GastosModel = require('../models/gastosModel');



const gastosGet = async (req, res) => {
  try {
    const mes = req.body.params;
    const gastos = await GastosModel.findOne({ "mes": mes }, { mes: 0 });
    res.send(gastos)
  } catch (error) {
    res.status(404).send("Recurso no encontrado")
  }
}




module.exports = gastosGet;
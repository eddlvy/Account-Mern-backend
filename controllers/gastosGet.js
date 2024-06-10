const GastosModel = require('../models/gastosModel');



const gastosGet = async (req, res) => {
  try {
    const mes = req.params.mes;
    const gastos = await GastosModel.findOne({ "mes": mes }, { _id: 0, mes: 0, __v: 0, concepto: 0 });
    return res.send(gastos)
  } catch (error) {
    return res.status(404).send("Recurso no encontrado")
  }
}




module.exports = gastosGet;
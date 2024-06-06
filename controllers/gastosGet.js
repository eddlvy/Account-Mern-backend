const GastosModel = require('../models/gastosModel');



const gastosGet = async (req, res) => {
  try {
    const mes = req.params.mes;
    const gastos = await GastosModel.findOne({ "mes": mes }, { _id: 0, mes: 0, __v: 0, concepto: 0 });
    res.send(gastos)
  } catch (error) {
    res.status(404).send("Recurso no encontrado")
  }
}




module.exports = gastosGet;
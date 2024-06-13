const GastosModel = require('../models/gastosModel');


const historiaGastosGet = async (req, res) => {
  try {
    const gastos = await GastosModel.find({}, { mes: 1, concepto: 1, _id: 0 })
    return res.send(gastos)
  } catch (error) {
    return res.status(500).send("Error retrieving documents")
  }
}


module.exports = historiaGastosGet
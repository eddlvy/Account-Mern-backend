const GastosModel = require('../models/gastosModel');



const historiaGastosMes = async (req, res) => {
  try {
    const mes = req.params.mes;
    const gastos = await GastosModel.findOne({ "mes": mes }, { concepto: 1, _id: 0 });
    return res.send(gastos)

  } catch (error) {
    return res.status(500).send("Error retrieving document specified")
  }
}


module.exports = historiaGastosMes;
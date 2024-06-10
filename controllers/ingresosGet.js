const IngresosModel = require('../models/ingresosModel');


const ingresosGet = async (req, res) => {
  try {
    const mes = req.params.mes;
    const ingreso = await IngresosModel.findOne({ "mes": mes }, { "_id": 0, "mes": 0 }, { "total": 1 });
    return res.send(ingreso)

  } catch (error) {
    console.error("Error handling request:", error);
    return res.send(`Error , ${error}`)
  }
}

module.exports = ingresosGet;
const IngresosModel = require('../models/ingresosModel');


const ingresosUpdate = async (req, res) => {
  try {
    const mes = await IngresosModel.findOne({ "mes": req.body.mes });
    if (!mes) {
      const ingreso = new IngresosModel(req.body);
      await ingreso.save();
      return res.send("ingreso registrado")
    } else {
      const updatedDocument = await IngresosModel.findOneAndUpdate({ mes: req.body.mes }, { $set: { total: req.body.total } }, { new: true });
      return res.send("Ingreso Actualizado")

    }
  } catch (error) {
    console.error("Error handling request:", error);
    return res.send("Error registrando ingreso")
  }
}

module.exports = ingresosUpdate;



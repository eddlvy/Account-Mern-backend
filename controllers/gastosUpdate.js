const GastosModel = require('../models/gastosModel');

const updateGasto = async (req, res) => {
  try {
    const mes = req.params.mes;
    let gasto = req.params.gasto;
    const { renta, gasolina, deuda, comida, cuba, electricidad,
      agua, gas, arnona, hot, internet, bl, salud, tarjetas, otros, concepto
    } = req.body
    const mesDoc = await GastosModel.findOne({ "mes": mes });
    const gastoField = GastosModel.schema.paths[gasto];
    if (!mesDoc) {
      const gasto = new GastosModel({
        "mes": mes, renta, gasolina, deuda, comida, cuba, electricidad, agua, gas, arnona, hot, internet,
        bl, salud, tarjetas, otros, concepto
      });
      await gasto.save();
      res.send("Gasto registrado")
    }
    if (gastoField.instance === 'Array') {
      const updateObject = { $push: {} };
      updateObject.$push[gasto] = req.body[gasto];
      const updatedDocument = await GastosModel.updateOne({ mes: req.params.mes }, updateObject, { new: true });
      res.send("Gasto Actualizado")

    } else {
      const updateObject = { $set: {} };
      updateObject.$set[gasto] = req.body[gasto];
      const updatedDocument = await GastosModel.updateOne({ mes: req.params.mes }, updateObject, { new: true });
      res.send("Gasto Actualizado")
    }
  } catch (error) {
    console.error("Error handling request:", error);
    res.send("Error registrando gasto")
  }
}

module.exports = updateGasto;
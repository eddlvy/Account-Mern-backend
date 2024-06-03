const mongoose = require('mongoose');
const GastosModel = require('../models/gastosModel');

const updateGasto = async (req, res) => {
  try {
    const mes = await GastosModel.findOne({ "mes": req.params.mes });
    if (!mes) {
      const gasto = new GastosModel(req.body);
      await gasto.save();
      res.send("Gasto registrado")
    } else {
      let gasto = req.params.gasto;
      const updateObject = { $push: {} };
      updateObject.$push[gasto] = req.body[gasto];
      const updatedDocument = await GastosModel.updateOne({ mes: req.params.mes }, updateObject, { new: true });
      res.send("Gasto Actualizado")

    }
  } catch (error) {
    console.error("Error handling request:", error);
    res.send("Error registrando gasto")
  }
}

module.exports = updateGasto;
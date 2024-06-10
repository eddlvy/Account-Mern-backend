const GastosModel = require('../models/gastosModel');

const updateGasto = async (req, res) => {
  try {
    const mes = req.params.mes;
    let gastoName = req.params.gasto
    const { renta, gasolina, deuda, comida, cuba, electricidad,
      agua, gas, arnona, hot, internet, bl, salud, tarjetas, otros, concepto
    } = req.body
    const mesDoc = await GastosModel.findOne({ "mes": mes });
    if (!mesDoc) {
      const gasto = new GastosModel({
        "mes": mes, renta, gasolina, deuda, comida, cuba, electricidad, agua, gas, arnona, hot, internet,
        bl, salud, tarjetas, otros, concepto
      });
      await gasto.save();
      return res.send("Gasto registrado")
    }
    // update according to body
    if (concepto) {
      const UpdateObject = { $push: {} };
      // not dinamic property
      UpdateObject.$push.concepto = req.body.concepto;
      // dinamic property
      UpdateObject.$push[gastoName] = req.body[gastoName];
      console.log(UpdateObject)
      const updatedDocument = await GastosModel.updateOne(
        { mes: req.params.mes },
        UpdateObject,
        { new: true }
      );
      return res.send("Gasto Actualizado")

    } else {
      const UpdateObject = { $set: {} };
      UpdateObject.$set[gastoName] = req.body[gastoName];
      const updatedDocument = await GastosModel.updateOne(
        { mes: req.params.mes },
        UpdateObject,
        { new: true }
      );
      return res.send("Gasto Actualizado")
    }
  } catch (error) {
    console.error("Error handling request:", error);
    return res.send("Error registrando gasto")
  }
}

module.exports = updateGasto;
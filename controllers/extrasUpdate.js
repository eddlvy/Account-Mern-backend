const ExtrasModel = require('../models/extras');



const updateExtras = async (req, res) => {
  try {
    const { mes, cantidad, concepto } = req.body;
    const currentMes = await ExtrasModel.findOne({ "mes": mes })
    if (!currentMes) {
      const mesCurrent = new ExtrasModel({ mes, cantidad, concepto })
      await mesCurrent.save()
      return res.send('Horas Extras Actualizadas')
    }
    const updateObject = { $push: {} };
    updateObject.$push.cantidad = cantidad;
    updateObject.$push.concepto = concepto;
    const updateDocument = await ExtrasModel.updateOne({ "mes": mes }, updateObject, { new: true })
    return res.send('Horas Extras Actualizadas')
  } catch (error) {
    return res.send("Error Actualizando")
  }
}

module.exports = updateExtras;
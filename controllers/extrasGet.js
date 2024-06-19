const ExtrasModel = require('../models/extras');



const extrasGet = async (req, res) => {
  try {
    const mes = req.params.mes
    const horas = await ExtrasModel.find({ "mes": mes }, { _id: 0 });
    return res.send(horas)

  } catch (error) {
    return res.status(500).send("Error")
  }
}


module.exports = extrasGet;
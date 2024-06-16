const PlanModel = require('../models/planModel');


const PlanUpdate = async (req, res) => {
  try {
    const gasto = req.params.gasto;
    const updateObject = { $set: {} }
    updateObject.$set[gasto] = req.body[gasto]
    const updateDocument = await PlanModel.updateOne({}, updateObject, { new: true })
    return res.send("Plan Actualizado")
  } catch (error) {
    console.log(error);
    return res.send("Error Actualizando")
  }
}


module.exports = PlanUpdate;

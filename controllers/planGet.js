const PlanModel = require('../models/planModel');


const PlanGet = async (req, res) => {
  try {
    const plan = await PlanModel.find();
    return res.send(plan)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: "Error" })
  }
}


module.exports = PlanGet
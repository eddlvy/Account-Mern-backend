const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({

  renta: { type: Number },
  gasolina: { type: Number },
  deuda: { type: Number },
  comida: { type: Number },
  cuba: { type: Number },
  electricidad: { type: Number },
  agua: { type: Number },
  gas: { type: Number },
  arnona: { type: Number },
  telefonos: { type: Number },
  internet: { type: Number },
  bituachleumiedua: { type: Number },
  salud: { type: Number },
  tarjetas: { type: Number }
});


const PlanModel = mongoose.model("Plan", PlanSchema);

module.exports = PlanModel;
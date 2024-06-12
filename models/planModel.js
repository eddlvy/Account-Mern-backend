const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({

  renta: { type: Number, default: 0 },
  gasolina: { type: Number, default: 0 },
  deuda: { type: Number, default: 0 },
  comida: { type: Number, default: 0 },
  cuba: { type: Number, default: 0 },
  electricidad: { type: Number, default: 0 },
  agua: { type: Number, default: 0 },
  gas: { type: Number, default: 0 },
  arnona: { type: Number, default: 0 },
  hot: { type: Number, default: 0 },
  internet: { type: Number, default: 0 },
  bl: { type: Number, default: 0 },
  salud: { type: Number, default: 0 },
  tarjetas: { type: Number, default: 0 },
  otros: { type: Number, default: 0 }
});


const PlanModel = mongoose.model("plans", PlanSchema);

module.exports = PlanModel;
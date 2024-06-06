const mongoose = require('mongoose');

const GastosSchema = new mongoose.Schema({
  mes: {
    type: String,
    require: true
  },
  renta: { type: Number },
  gasolina: [Number],
  deuda: { type: Number },
  comida: [Number],
  cuba: { type: Number },
  electricidad: { type: Number },
  agua: { type: Number },
  gas: { type: Number },
  arnona: { type: Number },
  hot: { type: Number },
  internet: { type: Number },
  bl: { type: Number },
  salud: [Number],
  tarjetas: [Number],
  otros: [Number],
  concepto: [String]
});


const GastosModel = mongoose.model("Gastos", GastosSchema);

module.exports = GastosModel;
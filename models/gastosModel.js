const mongoose = require('mongoose');

const GastosSchema = new mongoose.Schema({
  mes: {
    type: String,
    require: true
  },
  renta: { type: Number, default: 0 },
  gasolina: [Number],
  deuda: { type: Number, default: 0 },
  comida: [Number],
  cuba: { type: Number, default: 0 },
  electricidad: { type: Number, default: 0 },
  agua: { type: Number, default: 0 },
  gas: { type: Number, default: 0 },
  arnona: { type: Number, default: 0 },
  hot: { type: Number, default: 0 },
  internet: { type: Number, default: 0 },
  bl: { type: Number, default: 0 },
  salud: [Number],
  tarjetas: [Number],
  otros: [Number],
  concepto: [String]
});


const GastosModel = mongoose.model("Gastos", GastosSchema);

module.exports = GastosModel;
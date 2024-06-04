const mongoose = require('mongoose');

const GastosSchema = new mongoose.Schema({
  mes: {
    type: String,
    require: true
  },
  renta: { type: Number },
  gasolina: {
    concepto: [String],
    cantidad: { Number }
  },
  deuda: { type: Number },
  comida: {
    concepto: [String],
    cantidad: { Number }
  },
  cuba: { type: Number },
  electricidad: { type: Number },
  agua: { type: Number },
  gas: { type: Number },
  arnona: { type: Number },
  telefonos: { type: Number },
  internet: { type: Number },
  bituachleumiedua: { type: Number },
  salud: {
    concepto: [String],
    cantidad: { Number }
  },
  tarjetas: {
    concepto: [String],
    cantidad: { Number }
  },
  otros: {
    concepto: [String],
    cantidad: { Number }
  },
});


const GastosModel = mongoose.model("Gastos", GastosSchema);

module.exports = GastosModel;
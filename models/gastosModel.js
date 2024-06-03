const mongoose = require('mongoose');

const GastosSchema = new mongoose.Schema({
  mes: {
    type: String,
    require: true
  },
  casa: { type: Number },
  gasolina: [Number],
  deuda: { type: Number },
  prestamos: [Number],
  comida: [Number],
  cuba: { type: Number },
  electricidad: { type: Number },
  agua: { type: Number },
  gas: { type: Number },
  arnona: { type: Number },
  telefonos: { type: Number },
  internet: { type: Number },
  bituachleumiedua: { type: Number },
  medicinas: [Number],
  seguromedico: { type: Number },
  tarjetas: [Number],
  otros: [Number],
});


const GastosModel = mongoose.model("Gastos", GastosSchema);

module.exports = GastosModel;
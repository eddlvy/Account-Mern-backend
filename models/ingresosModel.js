const mongoose = require('mongoose');


const IngresosSchema = new mongoose.Schema({
  mes: {
    type: String,
    require: true
  },
  total: { type: Number }
});

const IngresosModel = mongoose.model("Ingresos", IngresosSchema);

module.exports = IngresosModel;
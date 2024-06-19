const mongoose = require('mongoose')


const ExtrasSchema = new mongoose.Schema({
  mes: { type: String },
  cantidad: [Number],
  concepto: [String]
})

const ExtrasModel = mongoose.model("extras", ExtrasSchema);

module.exports = ExtrasModel
const mongoose = require("mongoose");


const MesSchema = new mongoose.Schema({
  mes: {
    type: String,
    require: true
  }
});


const MesModel = mongoose.model("mes", MesSchema);

module.exports = MesModel;
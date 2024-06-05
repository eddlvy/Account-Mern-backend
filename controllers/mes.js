const MesModel = require('../models/mesModel');


const mesUpdate = async (req, res) => {
  try {
    const doc = await MesModel.find();
    const cambiar = doc[0].mes;
    const mes = req.body.mes;

    const updatedDocument = await MesModel.findOneAndReplace({ mes: cambiar }, { mes: mes });
    res.send("Mes Actualizado")

  }
  catch (error) {
    console.error("Error handling request:", error);
    res.send("Error registrando ingreso")
  }
}

module.exports = mesUpdate;
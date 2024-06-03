const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  nombre: {
    type: String,
    require: true
  },
  clave: {
    type: String,
    require: true
  }
});


const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
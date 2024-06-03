const mongoose = require('mongoose');
const dotenv = require("dotenv").config({ path: "./config.env" });


const db_string = process.env.DB_STRING;
const databaseName = process.env.DB_NAME;
const options = {
  // connecting to a specific database
  dbName: databaseName,
  autoIndex: true
}

const connectToDB = async () => {
  try {
    await mongoose.connect(db_string, options);
    console.log("Connected to Atlas DB Data Database");
  } catch (error) {
    console.log("Not connected to DB", error);
  }
}

module.exports = connectToDB;
// requireing mongoose for making schema and model-
const mongoose = require("mongoose")


// Define Schema for collection2
const collection2Schema = mongoose.Schema({
    full_name: String,
    email: String,
    team_name: String,
  });


// Define models for collection2
const Collection2Modal = mongoose.model('collection2', collection2Schema);  


// exporting collection2modal
module.exports = { Collection2Modal }
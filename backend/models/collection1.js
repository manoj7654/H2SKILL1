// requireing mongoose for making schema and model
const mongoose = require("mongoose")


//  Define Schema for  collection1
const collection1Schema = mongoose.Schema({
    full_name: String,
    email: String,
    number: String,
    city: String,
    url: String,
  },{
    versionKey:false
  });

  
  //Define models for collection1
const Collection1Modal = mongoose.model('collection1', collection1Schema);


// exporting collection1model
module.exports = { Collection1Modal }
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  // Role e bak belki degistirebelirim
  role: {
    type: String,
    enum: ["student", "admin"],
    default: "student",
  },
  
  name: {
    type: String,
    
  },
  lastName: {
    type: String,
    
  },
  tcNo: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    
  },
  //Telefon detayli bak
  phoneNumber: {
    type: Number,
    
  },
  address: {
    type: String,
    
  },
  emergencyNumber: {
    type: Number,
    
  },
  age: {
    type: Number,
    
  },
  weight: {
    type: Number,
    
  },
  height: {
    type: Number,
    
  },
  branch: {
    type: String,
    
  },

});

const User = mongoose.model("User", userSchema);

module.exports = User;

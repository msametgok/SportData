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
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  tcNo: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  //Telefon detayli bak
  phoneNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: Number,
    required: true,
  },
  emergencyNumber: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  // Role e bak belki degistirebelirim
  role: {
    type: String,
    //enum: ["student", "admin"], WE DONT NEED THIS USAGE FOR THIS PROJECT
    default: "student",
  },

  name: String,

  lastName: String,

  tcNo: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: String,
  //Telefon detayli bak
  phoneNumber: Number,

  address: String,

  emergencyNumber: Number,

  emergencyPerson: String,

  birthdate: Date,

  age: Number,

  weight: Number,

  height: Number,

  branch: String,
});

userSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next();
      user.password = hash;
      next();
    });
  });
});

const User = mongoose.model("User", userSchema);

module.exports = User;

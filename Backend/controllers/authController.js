const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      status: "success",
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    await User.findOne({ email }).then((user) => {
      bcrypt.compare(password, user.password, (err, same) => {
        if (same) {
          res.status(200).json({
            status: "success",
            user,
          });
        } else {
          res.status(400).json({
            status: "fail",
            msg: "Wrong password",
          });
        }
      });
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      msg: "No users found",
      error,
    });
  }
};

const User = require("../Models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
// user registration
exports.register = async (req, res) => {
  try {
    //hashing password

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    })
    await newUser.save()

    res.status(200).json({ success: true, message: "succefully created" })
  } catch (error) {
    res.status(500).json({ success: false, message: "failed to create" })
  }
}

// user login
exports.login = async (req, res) => {
  try {
  } catch (error) {}
}

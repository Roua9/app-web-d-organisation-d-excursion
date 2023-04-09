const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
  const token = req.cookies.accesToken

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "you're not authorize " })
  }

  // if token is exist then verify the token
  let secretKey = "1001gagagag"
  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res
        .status(401)
        .json({ success: false, message: "token is invalid" })
    }
    req.user = user
    next() // don't forget to call next
  })
}

exports.verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.role === "user") {
      next()
    } else {
      return res
        .status(401)
        .json({ success: false, message: "you're not authenticated" })
    }
  })
}
exports.verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.role === "admin") {
      next()
    } else {
      return res
        .status(401)
        .json({ success: false, message: "you're not authorized" })
    }
  })
}

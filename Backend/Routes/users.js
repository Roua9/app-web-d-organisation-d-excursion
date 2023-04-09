const express = require("express")
const router = express.Router()

const verifyToken = require("../utils/verifyToken")
const UserController = require("../Controllers/userController")

//update User
router.put("/:id/updateUser", verifyToken.verifyUser, UserController.updateUser)

//delete User
router.delete(
  "/:id/deleteUser",
  verifyToken.verifyUser,
  UserController.deleteUser
)

//getSingle User
router.get(
  "/:id/getSingleUser",
  verifyToken.verifyUser,
  UserController.getSingleUser
)

//getAll User
router.get("/getAllUser", verifyToken.verifyAdmin, UserController.getAllUser)
module.exports = router

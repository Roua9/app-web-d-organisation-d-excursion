const express = require("express")
const router = express.Router()

const UserController = require("../Controllers/userController")

//update User
router.put("/:id/updateUser", UserController.updateUser)

//delete User
router.delete("/:id/deleteUser", UserController.deleteUser)

//getSingle User
router.get("/:id/getSingleUser", UserController.getSingleUser)

//getAll User
router.get("/getAllUser", UserController.getAllUser)
module.exports = router

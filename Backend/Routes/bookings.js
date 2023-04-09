const express = require("express")
const router = express.Router()

const bookingController = require("../Controllers/bookingController.js")
const verifyToken = require("../utils/verifyToken.js")

router.post("/", bookingController.createBooking)
router.get("/:id", bookingController.getBooking)
router.get("/", bookingController.getAllBooking)

module.exports = router

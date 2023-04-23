const express = require("express")
const router = express.Router()

const reviewController = require("../Controllers/reviewHotelController.js")
const verifyToken = require("../utils/verifyToken")

router.post("/:hotelId", reviewController.createReviewHotel)

module.exports = router

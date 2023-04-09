const express = require("express")
const router = express.Router()

const reviewController = require("../Controllers/reviewController.js")
const verifyToken = require("../utils/verifyToken")

router.post("/:excursionId", reviewController.createReview)

module.exports = router

const express = require("express")
const router = express.Router()

const reviewCampController = require("../Controllers/reviewCampController.js")
const verifyToken = require("../utils/verifyToken")

router.post("/:campId", reviewCampController.createReviewCamp)

module.exports = router

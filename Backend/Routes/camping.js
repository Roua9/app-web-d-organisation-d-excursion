const express = require("express")
const router = express.Router()

const CampController = require("../Controllers/campController.js")

const verifyToken = require("../utils/verifyToken")

//create new Camp
router.post(
  "/addCamp",

  CampController.createCamp
)

//update Camp
router.put("/:id/updateCamp", CampController.updateCamp)

//delete Camp
router.delete("/:id/deleteCamp", CampController.deleteCamp)

//getSingle Camp
router.get("/:id/getSingleCamp", CampController.getSingleCamp)

//getAll Camp
router.get("/getAllCamp", CampController.getAllCamp)

//get Camp by search
router.get("/search/getCampBySearch", CampController.getCampBySearch)

//get featured Camp
router.get("/search/getFeaturedCamp", CampController.getFeaturedCamp)

//get count Camp
router.get("/search/getCampCount", CampController.getCampCount)

// export default router
module.exports = router

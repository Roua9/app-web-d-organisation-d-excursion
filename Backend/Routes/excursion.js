const express = require("express")
const router = express.Router()

const ExcursionController = require("../Controllers/ExcursionController.js")

//create new excursion
router.post("/addExcursion", ExcursionController.createExcursion)

//update excursion
router.put("/:id/updateExcursion", ExcursionController.updateExcursion)

//delete excursion
router.delete("/:id/deleteExcursion", ExcursionController.deleteExcursion)

//getSingle excursion
router.get("/:id/getSingleExcursion", ExcursionController.getSingleExcursion)

//getAll excursion
router.get("/getAllExcursion", ExcursionController.getAllExcursion)

//get excursion by search
router.get("/search/getExcursionBySearch", ExcursionController.getExcursionBySearch)

//get featured excursion 
router.get("/search/getFeaturedExcursion", ExcursionController.getFeaturedExcursion)

//get count excursion 
router.get("/search/getExcursionCount", ExcursionController.getExcursionCount)

// export default router
module.exports = router

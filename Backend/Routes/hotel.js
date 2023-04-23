const express = require("express")
const router = express.Router()

const HotelController = require("../Controllers/hotelController.js")

const verifyToken = require("../utils/verifyToken")

//create new Hotel
router.post(
  "/addHotel",

  HotelController.createHotel
)

//update Hotel
router.put("/:id/updateHotel", HotelController.updateHotel)

//delete Hotel
router.delete("/:id/deleteHotel", HotelController.deleteHotel)

//getSingle Hotel
router.get("/:id/getSingleHotel", HotelController.getSingleHotel)

//getAll Hotel
router.get("/getAllHotel", HotelController.getAllHotel)

//get Hotel by search
router.get("/search/getHotelBySearch", HotelController.getHotelBySearch)

//get featured Hotel
router.get("/search/getFeaturedHotel", HotelController.getFeaturedHotel)

//get count Hotel
router.get("/search/getHotelCount", HotelController.getHotelCount)

// export default router
module.exports = router

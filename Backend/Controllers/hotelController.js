const Hotel = require("../Models/Hotel.js")

// create new Hotel

exports.createHotel = async (req, res) => {
  const newHotel = new Hotel(req.body)

  try {
    const savedHotel = await newHotel.save()

    res.status(200).json({
      success: true,
      message: "successfully created",
      data: savedHotel,
    })
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create .Try again" })
  }
}

// update Hotel
exports.updateHotel = async (req, res) => {
  const id = req.params.id
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json({
      success: true,
      message: "successfully updated",
      data: updatedHotel,
    })
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update" })
  }
}

//delete Hotel
exports.deleteHotel = async (req, res) => {
  const id = req.params.id
  try {
    await Hotel.findByIdAndDelete(id)

    res.status(200).json({
      success: true,
      message: "successfully deleted",
    })
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete" })
  }
}
//getSingle Hotel
exports.getSingleHotel = async (req, res) => {
  const id = req.params.id
  try {
    const hotel = await Hotel.findById(id).populate("reviews")

    res.status(200).json({
      success: true,
      message: "successfully founded",
      data: hotel,
    })
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" })
  }
}
//getAll Hotel
exports.getAllHotel = async (req, res) => {
  // for pagination
  const page = parseInt(req.query.page)

  try {
    const hotels = await Hotel.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8)

    res.status(200).json({
      success: true,
      count: hotels.length,
      message: "successfull",
      data: hotels,
    })
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" })
  }
}

// get Hotel by search
exports.getHotelBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i")
  const distance = parseInt(req.query.distance)
  const price = parseInt(req.query.price)
  try {
    //$gte : matcher than equal
    const hotels = await Hotel.find({
      city,
      distance: { $gte: distance },
      price: { $gte: price },
    }).populate("reviews")

    res.status(200).json({
      success: true,
      message: "successfull",
      data: hotels,
    })
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" })
  }
}

//get featured Hotel
exports.getFeaturedHotel = async (req, res) => {
  try {
    const hotels = await Hotel.find({ featured: true })
      .populate("reviews")
      .limit(8)

    res.status(200).json({
      success: true,
      message: "successfull",
      data: hotels,
    })
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" })
  }
}

// get Hotel count
exports.getHotelCount = async (req, res) => {
  try {
    const hotelCount = await Hotel.estimatedDocumentCount()

    res.status(200).json({
      success: true,
      message: "successfull",
      data: hotelCount,
    })
  } catch (error) {
    res.status(404).json({ success: false, message: "failed to fetch" })
  }
}

const Hotel = require("../Models/Hotel.js")

const ReviewHotel = require("../Models/ReviewHotel.js")

exports.createReviewHotel = async (req, res) => {
  const hotelId = req.params.hotelId
  const newReviewHotel = new ReviewHotel({ ...req.body })

  try {
    const savedReviewHotel = await newReviewHotel.save()

    //after creating a new review now update the reviews array of the hotel

    await Hotel.findByIdAndUpdate(hotelId, {
      $push: { reviews: savedReviewHotel._id },
    })

    res.status(200).json({
      success: true,
      message: "Review Submitted",
      data: savedReviewHotel,
    })
  } catch (error) {
    res.status(500).json({ success: true, message: "failed to Submit" })
  }
}

const Camping = require("../Models/Camping.js")

const ReviewCamp = require("../Models/ReviewCamp.js")

exports.createReviewCamp = async (req, res) => {
  const campId = req.params.campId
  const newReviewCamp = new ReviewCamp({ ...req.body })

  try {
    const savedReviewCamp = await newReviewCamp.save()

    //after creating a new review now update the reviews array of the Camp

    await Camping.findByIdAndUpdate(campId, {
      $push: { reviews: savedReviewCamp._id },
    })

    res.status(200).json({
      success: true,
      message: "Review Submitted",
      data: savedReviewCamp,
    })
  } catch (error) {
    res.status(500).json({ success: true, message: "failed to Submit" })
  }
}

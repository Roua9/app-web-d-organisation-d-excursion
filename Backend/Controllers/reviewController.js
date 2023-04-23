const Excursion = require("../Models/Excursion.js")

const Review = require("../Models/Review.js")


exports.createReview = async (req, res) => {
  const excursionId = req.params.excursionId

  const newReview = new Review({ ...req.body })

  try {
    const savedReview = await newReview.save()

    //after creating a new review now update the reviews array of the excursion

    await Excursion.findByIdAndUpdate(excursionId, {
      $push: { reviews: savedReview._id },
    })

    res
      .status(200)
      .json({ success: true, message: "Review Submitted", data: savedReview })
  } catch (error) {
    res.status(500).json({ success: true, message: "failed to Submit" })
  }
}



// const Excursion = require("../Routes/excursion.js")
const Excursion = require("../Models/Excursion.js")

// create new excursion

exports.createExcursion = async (req, res) => {
  const newExcursion = new Excursion(req.body)

  try {
    const savedExcursion = await newExcursion.save()

    res.status(200).json({
      success: true,
      message: "successfully created",
      data: savedExcursion,
    })
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create .Try again" })
  }
}

// update excursion
exports.updateExcursion = async (req, res) => {
  const id = req.params.id
  try {
    const updatedExcursion = await Excursion.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json({
      success: true,
      message: "successfully updated",
      data: updatedExcursion,
    })
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update" })
  }
}

//delete excursion
exports.deleteExcursion = async (req, res) => {
  const id = req.params.id
  try {
    await Excursion.findByIdAndDelete(id)

    res.status(200).json({
      success: true,
      message: "successfully deleted",
    })
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete" })
  }
}
//getSingle excursion
exports.getSingleExcursion = async (req, res) => {
  const id = req.params.id
  try {
    const excursion = await Excursion.findById(id).populate("reviews")

    res.status(200).json({
      success: true,
      message: "successfully founded",
      data: excursion,
    })
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" })
  }
}
//getAll excursion
exports.getAllExcursion = async (req, res) => {
  // for pagination
  const page = parseInt(req.query.page)

  try {
    const excursions = await Excursion.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8)

    res.status(200).json({
      success: true,
      count: excursions.length,
      message: "successfull",
      data: excursions,
    })
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" })
  }
}

// get excursion by search
exports.getExcursionBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i")
  const distance = parseInt(req.query.distance)
  const price = parseInt(req.query.price)
  try {
    //$gte : matcher than equal
    const excursions = await Excursion.find({
      city,
      distance: { $gte: distance },
      price: { $gte: price },
    }).populate("reviews")

    res.status(200).json({
      success: true,
      message: "successfull",
      data: excursions,
    })
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" })
  }
}

//get featured excursion
exports.getFeaturedExcursion = async (req, res) => {
  try {
    const excursions = await Excursion.find({ featured: true })
      .populate("reviews")
      .limit(8)

    res.status(200).json({
      success: true,
      message: "successfull",
      data: excursions,
    })
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" })
  }
}

// get excursion count
exports.getExcursionCount = async (req, res) => {
  try {
    const excursionCount = await Excursion.estimatedDocumentCount()

    res.status(200).json({
      success: true,
      message: "successfull",
      data: excursionCount,
    })
  } catch (error) {
    res.status(404).json({ success: false, message: "failed to fetch" })
  }
}

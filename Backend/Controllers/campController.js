const Camp = require("../Models/Camping.js")

// create new Camp

exports.createCamp = async (req, res) => {
  const newCamp = new Camp(req.body)

  try {
    const savedCamp = await newCamp.save()

    res.status(200).json({
      success: true,
      message: "successfully created",
      data: savedCamp,
    })
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create .Try again" })
  }
}

// update Camp
exports.updateCamp = async (req, res) => {
  const id = req.params.id
  try {
    const updatedCamp = await Camp.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json({
      success: true,
      message: "successfully updated",
      data: updatedCamp,
    })
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update" })
  }
}

//delete Camp
exports.deleteCamp = async (req, res) => {
  const id = req.params.id
  try {
    await Camp.findByIdAndDelete(id)

    res.status(200).json({
      success: true,
      message: "successfully deleted",
    })
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete" })
  }
}
//getSingle Camp
exports.getSingleCamp = async (req, res) => {
  const id = req.params.id
  try {
    const camp = await Camp.findById(id).populate("reviews")

    res.status(200).json({
      success: true,
      message: "successfully founded",
      data: camp,
    })
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" })
  }
}
//getAll Camp
exports.getAllCamp = async (req, res) => {
  // for pagination
  const page = parseInt(req.query.page)

  try {
    const Camps = await Camp.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8)

    res.status(200).json({
      success: true,
      count: Camps.length,
      message: "successfull",
      data: Camps,
    })
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" })
  }
}

// get Camp by search
exports.getCampBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i")
  const distance = parseInt(req.query.distance)
  const price = parseInt(req.query.price)
  try {
    //$gte : matcher than equal
    const Camps = await Camp.find({
      city,
      distance: { $gte: distance },
      price: { $gte: price },
    }).populate("reviews")

    res.status(200).json({
      success: true,
      message: "successfull",
      data: Camps,
    })
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" })
  }
}

//get featured Camp
exports.getFeaturedCamp = async (req, res) => {
  try {
    const Camps = await Camp.find({ featured: true })
      .populate("reviews")
      .limit(8)

    res.status(200).json({
      success: true,
      message: "successfull",
      data: Camps,
    })
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" })
  }
}

// get Camp count
exports.getCampCount = async (req, res) => {
  try {
    const CampCount = await Camp.estimatedDocumentCount()

    res.status(200).json({
      success: true,
      message: "successfull",
      data: CampCount,
    })
  } catch (error) {
    res.status(404).json({ success: false, message: "failed to fetch" })
  }
}

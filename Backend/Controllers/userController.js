const User = require("../Models/User")

// update User
exports.updateUser = async (req, res) => {
  const id = req.params.id
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json({
      success: true,
      message: "successfully updated",
      data: updatedUser,
    })
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update" })
  }
}

//delete User
exports.deleteUser = async (req, res) => {
  const id = req.params.id
  try {
    await User.findByIdAndDelete(id)

    res.status(200).json({
      success: true,
      message: "successfully deleted",
    })
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete" })
  }
}

//getAll User
exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find({})

    res.status(200).json({
      success: true,
      message: "successfull",
      data: users,
    })
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" })
  }
}

//getSingle User
exports.getSingleUser = async (req, res) => {
    const id = req.params.id
    try {
      const user = await User.findById(id)
  
      res.status(200).json({
        success: true,
        message: "successfully founded",
        data: user,
      })
    } catch (error) {
      res.status(404).json({ success: false, message: "Not found" })
    }
  }
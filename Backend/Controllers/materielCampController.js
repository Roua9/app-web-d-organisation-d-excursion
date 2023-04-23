const Materiel = require("../Models/MaterielCamp.js")

// create new MaterielCamp

exports.createMaterielCamp = async (req, res) => {
  const newMateriel = new Materiel(req.body)

  try {
    const savedMateriel = await newMateriel.save()

    res.status(200).json({
      success: true,
      message: "successfully created",
      data: savedMateriel,
    })
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create .Try again" })
  }
}

//getAll materiel
exports.getAllMateriel = async (req, res) => {
  try {
    const materiels = await Materiel.find({})

    res.status(200).json({
      success: true,
      count: materiels.length,
      message: "successfull",
      data: materiels,
    })
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" })
  }
}

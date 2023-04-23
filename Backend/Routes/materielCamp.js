const express = require("express")
const router = express.Router()

const MaterielController = require("../Controllers/materielCampController")

//create new Camp
router.post(
  "/addMateriel",

  MaterielController.createMaterielCamp
)

//getAll materiel
router.get("/getAllMateriel", MaterielController.getAllMateriel)

module.exports = router

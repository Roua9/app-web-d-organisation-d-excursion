const mongoose = require("mongoose")

const materielSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      required: true,
    },

    desc: {
      type: String,
      required: true,
    },
    tel: {
      type: String,
      required: true,
    },
    nom: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("MaterielCamp", materielSchema)

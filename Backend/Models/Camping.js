const mongoose = require("mongoose")

const campSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
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
    nbrJr: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },

    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "ReviewCamp",
      },
    ],
  },
  { timestamps: true }
)

module.exports = mongoose.model("Camping", campSchema)

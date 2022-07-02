const mongoose = require("mongoose");

const markerSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
  photos: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "Photo",
      },
    ],
    default: [],
  },
  recentlyPhotoUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Photos", markerSchema);

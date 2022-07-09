const mongoose = require("mongoose");
const { Schema } = mongoose;

const markerSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
    unique: true,
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

module.exports = mongoose.model("Marker", markerSchema);

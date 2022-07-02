const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    unique: true,
    required: true,
  },
  soundUrl: {
    type: String,
    unique: true,
    required: true,
  },
  tags: {
    type: [
      {
        type: Schema.Types.String,
      },
    ],
    default: [],
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Photos", photoSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;

const photoSchema = new Schema({
  imageUrl: {
    type: String,
    unique: true,
    required: true,
  },
  soundUrl: {
    type: String,
  },
  creator: {
    type: String,
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

module.exports = mongoose.model("Photo", photoSchema);

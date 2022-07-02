const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  bookmarks: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "Photo",
      },
    ],
    default: [],
  },
  myPhotos: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "Photo",
      },
    ],
    default: [],
  },
});

module.exports = mongoose.model("Users", userSchema);

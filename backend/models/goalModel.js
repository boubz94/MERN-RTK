const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    /* This is a reference to the User model. */
    user: {
      type: mongoose.Schema.Types.ObjectID,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Goal", goalSchema);

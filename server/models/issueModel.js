const mongoose = require("mongoose");
const issueSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    title: {
      type: String,
      require: [true, "Title is required"],
    },
    status: {
      type: String,
      require: [true, "status is required"],
      default: "Under Review",
      enum: ["Under Review", "Active", "Completed"],
    },

    desc: {
      type: String,
      require: [true, "Email is required"],
    },
    type: {
      type: String,
      require: [true, "Password is required"],
    },
    location: {
      type: String,
      require: [true, "location is required"],
    },
    pin: {
      type: String,
      require: [true, "Pin Code is required"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("issues", issueSchema);

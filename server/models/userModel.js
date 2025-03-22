const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      require: [true, "Name is required"],
    },
    lname: {
      type: String,
      require: function () {
        if (this.role === "Volunteer") {
          return true;
        }
        return false;
      },
    },
    email: {
      type: String,
      require: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "Password is required"],
    },
    aadhar: {
      type: String,
      require: function () {
        if (this.role === "Volunteer") {
          return true;
        }
        return false;
      },
      unique: true,
    },
    skills: {
      type: [String],
      default: [],
      require: function () {
        if (this.role === "Volunteer") {
          return true;
        }
        return false;
      },
      unique: true,
    },
    role: {
      type: String,
      require: [true, "Role is required"],
      enum: ["Volunteer", "NGO", "Government"],
    },
    location: {
      type: String,
      require: [true, "location is required"],
    },
    phone: {
      type: String,
      require: [true, "Email is required"],
      unique: true,
    },
    pin: {
      type: String,
      require: [true, "Pin Code is required"],
    },
    website: {
      type: String,
      require: function () {
        if (this.role === "NGO" || this.role === "Government") {
          return true;
        }
        return false;
      },
    },
    orgc: {
      type: String,
      require: function () {
        if (this.role === "NGO" || this.role === "Government") {
          return true;
        }
        return false;
      },
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", userSchema);

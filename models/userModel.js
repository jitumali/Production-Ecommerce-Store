const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      rquired: true,
      trim: true,
    },
    email: {
      type: String,
      rquired: true,
      unique: true,
    },
    password: {
      type: String,
      rquired: true,
    },
    phone: {
      type: String,
      rquired: true,
    },
    address: {
      type: String,
      rquired: true,
    },
    answer: {
      type: String,
      rquired: true,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);

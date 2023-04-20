const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Username is required"],
    minLength: [4, "Username is too short"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [6, "Password is too short"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },
});

const User = model("User", userSchema);
module.exports = User;

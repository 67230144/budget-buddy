const mongoose = require("mongoose");
const { url } = require("./config");

mongoose
  .connect(url)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

module.exports = mongoose.connection;

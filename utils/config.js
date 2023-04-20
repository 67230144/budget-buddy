require("dotenv").config();

const url = process.env.MONGODB_URI;
const port = process.env.PORT || 3000;

module.exports = { url, port };

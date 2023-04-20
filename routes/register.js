const { createUser } = require("../controllers/registerController");
const express = require("express");
const router = express.Router();

router.post("/", createUser);
module.exports = router;

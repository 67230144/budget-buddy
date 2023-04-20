const User = require("../model/User");

const createUser = async function (req, res, next) {
  try {
    const { name, password } = req.body;

    const user = await User.create({
      name,
      password,
    });

    res.status(201).json({ message: "User registered", user });
  } catch (err) {
    next(err);
  }
};

module.exports = { createUser };

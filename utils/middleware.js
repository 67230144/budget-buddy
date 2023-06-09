const errorHandler = function (err, req, res, next) {
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((error) => error.message);
    return res.status(400).json({ errors });
  }

  next(err);
};

module.exports = { errorHandler };

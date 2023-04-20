const express = require("express");
const db = require("./utils/db");
const { errorHandler } = require("./utils/middleware");
const { port } = require("./utils/config");

const app = express();
app.use(express.json());

app.use("/register", require("./routes/register"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

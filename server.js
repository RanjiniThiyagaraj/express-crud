const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("./config/database");
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const jwt = require("./utils/jwt");
app.set("secretKey", "express-crud");

app.use(logger("dev"));
app.use(bodyParser.json());

mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

app.get("/healthcheck", (req, res) => {
  res.json({
    status: "success",
    message: "Health check api executed successfully",
  });
});

app.use("/users", userRoutes);
app.use("/product", productRoutes);

app.listen(3000, () => {
  console.log("Server is running on 3000 port!!!");
});

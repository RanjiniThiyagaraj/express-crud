const express = require("express");
const router = express.Router();
const jwt = require("../utils/jwt");
const productController = require("../app/api/controller/product");

router.post("/create", jwt.validateToken, productController.create);
router.get("/", productController.getAll);
router.get("/:id", productController.getById);
module.exports = router;

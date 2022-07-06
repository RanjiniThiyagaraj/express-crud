const express = require("express");
const router = express.Router();
const userController = require("../app/api/controller/users");

router.post("/register", userController.create);
router.post("/login", userController.authenticate);

module.exports = router;

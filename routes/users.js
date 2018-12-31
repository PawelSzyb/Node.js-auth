const express = require("express");

const router = express.Router();

// controllers
const usersController = require("../controllers/users");

// Login
router.get("/login", usersController.displayLoginPage);

// Register
router.get("/register", usersController.displayRegisterPage);

router.post("/register", usersController.loginUser);

module.exports = router;

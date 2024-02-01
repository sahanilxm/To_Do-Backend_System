const express = require('express');
const router = express.Router();

const { UserController } = require('../controllers/index.js');
const userController = new UserController();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

module.exports = router;
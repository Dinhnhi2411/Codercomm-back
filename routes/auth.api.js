const express = require("express");
const authController = require("../controllers/auth.controller");
const validators = require("../middlewares/validators");
const router = express.Router();
const { body } = require("express-validator");


/**
* @route POST /auth/login
* @description  Log in with email and password
* @body {email, password}
* @access Public
*/

router.post(
  "/login",
  validators.validate([
    body("email", "invalid email")
      .exists()
      .isEmail()
      .normalizeEmail({ gmail_remove_dots: false }),
    body("password", "invalid password").exists().notEmpty(),
  ]),
  authController.loginWithEmail
);

module.exports = router;
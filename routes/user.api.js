const express = require("express");
const router = express.Router();

/**
* @route POST /users
* @description  Register new user
* @body {name, email, password}
* @access Public
*/



/**
* @route GET/users?page=1&limit=10
* @description  Get users with pagination
* @access Login required
*/



/**
* @route GET/users/me
* @description Get current user info
* @access Login required
*/



/**
* @route GET/users/:id
* @description Update user profile
* @body { name, avatarUrl, coverUrl, aboutMe, city, county, company, jobTitle, facebookLink, instagramLink, linkedinLink, twitterLink }
* @access Login required
*/


module.exports = router;
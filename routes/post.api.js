const express = require("express");
const router = express.Router();


/**
* @route GET/posts/user/:userId?page=1&limit=10
* @description Get all posts an user can see with pagination
* @access Login required
*/



/**
* @route POST/posts
* @description Create a new post
* @body { content, image }
* @access Login required
*/



/**
* @route POST/posts/:id
* @description Update a post
* @body { content, image }
* @access Login required
*/



/**
* @route DELETE/posts/:id
* @description Delete a post
* @access Login required
*/



/**
* @route GET/posts/:id
* @description Get a single post
* @access Login required
*/



/**
* @route GET/posts/:id/comments
* @description Get comments of a post.
* @access Login required
*/

module.exports = router;
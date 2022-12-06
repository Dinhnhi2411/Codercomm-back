var express = require('express');
var router = express.Router();

// authApi
const authApi = require("./auth.api");
router.use("/auth", authApi)

// userApi
const userApi = require("./user.api");
router.use("/users", userApi)

// postApi
const postApi = require("./post.api");
router.use("/posts", postApi)

// commentApi
const commentApi = require("./comment.api");
router.use("/comments",commentApi)

// reactionApi
const reactionApi = require("./reaction.api");
router.use("/reactions", reactionApi)

// friendApi
const friendApi = require("./friend.api");
router.use("/friends", friendApi)


/**
* @rourte POST /auth/login - Log in with username and password
*
* @route POST /users - Register a new account
* @route GET /users?page=1&limit=10 - Get user with pagination
* @route GET /users/me- Get current user info
* @route GET /users/:id - Get a user profile
* @route PUT /users/:id - Update a user profile
*
* @route POST /post - Create a new post
* @route GET /posts/users/:userId?page=1&limit=10 - Get posts with pagination
* @route GET /posts/:id - Get details of post
* @route PUT /posts/:id - Update a post
* @route DELETE /posts/:id - Remove a post 
* @route GET/ posts/:id/commnets/ - Get list of comments of a post 
*
* @route POST /comments - Create a nwe comment
* @route PUT /comments/:id - Update comment
* @route DELETE /comments/:id - Delete comment
*
* @route POST /reactions - Create a new emoij reaction for a post/comments
*
* @route POST /friends/requests - Send a friend request
* @route GET /friends/requests/incoming - Get the list of received pending request
* @route GET /friends/requests/outgoing - Get the list of sent pending requests
* @route PUT /friends/requests/:userId - Accept/Reject a received pending requests 
* @route GET /friends - Get the list of friends
* @route DELETE /friends/requests/:userId - Cancel a friend request
* @route DELETE /friends/:userId - Remove a friend


*/
module.exports = router;

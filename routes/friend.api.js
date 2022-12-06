const express = require("express");
const router = express.Router();


/**
* @route POST/friends/request
* @description Send a friend request
* @body { to: User ID }
* @access Login required
*/



/**
* @route GET/friends/requests/incoming
* @description Get the list of received pending requests
* @access Login required
*/



/**
* @route GET/friends/requests/outgoing
* @description Get the list of sent pending requests
* @access Login required
*/



/**
* @route GET/friends
* @description Get the list of friends
* @access Login required
*/



/**
* @route PUT/friends/request/:userId
* @description Accept/Reject a received pending requests
* @body { status: 'accepted' or 'declined' }
* @access Login required
*/



/**
* @route DELETE/friends/request/:userId
* @description Cancel a friend request
* @access Login required
*/



/**
* @route DELETE/friends/:userId
* @description Remove a friend
* @access Login required
*/


module.exports = router;
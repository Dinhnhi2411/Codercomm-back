const express = require("express");
const { body, param } = require("express-validator");
const commentController = require("../controllers/comment.controller");
const authentication = require("../middlewares/authentication");
const validators = require("../middlewares/validators");
const router = express.Router();


/**
* @route POST/comments/
* @description Create a new comment
* @body { content, postId }
* @access Login required
*/

router.post(
    "/",
    authentication.loginRequired,
    validators.validate([
        body("content", "Missing content").exists().notEmpty(),
        body("postId", "Missing postId")
        .exists()
        .isString()
        .custom(validators.checkObjectId)
    ]),
    commentController.createNewComment
);

/**
* @route PUT/comments/:id
* @description Update a comment
* @access Login required
*/

router.put(
    "/:id",
    authentication.loginRequired,
    validators.validate([
        param("id").exists().isString().custom(validators.checkObjectId),
        body("content", "Missing content").exists().notEmpty(),
    ]),
    commentController.updateSingleComment
);

/**
* @route DELETE/comments/:id
* @description Delete a comment
* @body { content, postId }
* @access Login required
*/

router.delete(
  "/:id",
  authentication.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
  ]),
  commentController.deleteSingleComment
);


/**
* @route GET/comments/:id
* @description Get details of comment
* @access Login required
*/

router.get(
  "/:id",
  authentication.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
  ]),
  commentController.getSingleComment
);


module.exports = router;
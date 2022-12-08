const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = Schema(
  {
   content: {
      type: String,
      required: true,
    },
    image : {
      type: String,
      default: ""
    },
    author: {
      type: String,
      required: true,
      ref: "User"
    },



    isDeleted: {
      type: Boolean,
      default: false,
      select: false
    }, 

    commentCount : {
      type: Number,
      default: 0
    }, 

    reactions : {
      like : {
        type: Number,
        default: 0
      },
      dislike: {
        type: Number, 
        default: 0
      },
    },
  
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
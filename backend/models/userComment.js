const mongoose = require("mongoose");
const commentSchema =  new mongoose.Schema ({
    id: String, 
    author: String,
    quality: {  type: Number, min: 0, max: 5},
    packaging: Number,
    deliveryTime: Number,
    text: String,
    created_at: Date, // time of submission

});
module.exports = {
    schema: commentSchema,
    model: mongoose.model("comment", commentSchema
    )
  };
  
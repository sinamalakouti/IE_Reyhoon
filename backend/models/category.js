const mongoose = require("mongoose");

const category = new mongoose.Schema({
    id: String,
    name: String, 
});

module.exports = {
    schema: category,
    model: mongoose.model("category", category)

};

const mongoose = require("mongoose");
const food = require("./food.js");

const restaurantSchema = new mongoose.Schema({
  id: String,
  name: String,
  logo: String,
  openningTime: Number,
  closingTIme: Number,
  averageRate: Number,
  address: address.schema,
  categories: [category.schema],
  foods: [food.schema]
});

module.exports = {
  schema: restaurantSchema,
  model: mongoose.model("restaurant", restaurantSchema)
};

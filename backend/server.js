const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4000;
	
mongoose.connect("mongodb://localhost/web_ta", { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("DB connection alive");
});
var cors = require('cors');

app.use(express.json());
app.use(cors())

//routers
const foodRouter = require("./routes/foodRouter.js");
const restaurantsRouter = require("./routes/restaurantRouter.js");
app.get("/", (req, res) =>{
  res.send('Hello Express')
});

//app.use("/api/foods", foodRouter);
app.use("/api/restaurants", restaurantsRouter);

app.listen(port, () => console.log(`listening on port ${port}!`));
app.set('json spaces', 40);

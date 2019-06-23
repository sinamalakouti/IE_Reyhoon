const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost/web_ta", { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("DB connection alive");
});

app.use(express.json());

//routers
const foodRouter = require("./routes/foodRouter.js");
app.use("/api/foods", foodRouter);

app.listen(port, () => console.log(`listening on port ${port}!`));

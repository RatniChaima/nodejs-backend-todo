const express = require('express');
const cors = require("cors");
const compression = require("compression");

const app = express().use("*", cors());
app.use(compression());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// //DB Connection
// require("./src/database/db").connection();

// //Routes
// const routes = require("./src/routes/index");
// app.use("/", routes);

app.get('/', function(req, res) {
  res.send('Todo list backend v1')
})

app.listen(3000, () => {
  console.log("Listening on port 3000 ...");
});
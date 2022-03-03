// Requires ExpressJs Framework
const express = require("express");
const bodyParser = require("body-parser");

// Include Route Files
const hotelRoutes = require("./src/routes/HotelRoutes");

// Express Framework
const app = express();
var path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Start Listening Port
var port = "8095";
var server = app.listen(port, function () {
  console.log("Server is running ...");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", hotelRoutes);

// Catch the broken links
app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + "not found" });
});

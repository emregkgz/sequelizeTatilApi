var hotelDao = require("../dao/Hoteldao");
var ContentOrm = require("../dao/ContentOrm");

exports.RoomTypeListFunction = function (req, res) {
  ContentOrm.RoomTypeListFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
//
exports.RoomTypeListFunction = function (req, res) {
  hotelDao.RoomTypeListFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.HotelListFunction = function (req, res) {
  hotelDao.HotelListFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.PricesListFuntion = function (req, res) {
  hotelDao.PricesListFuntion(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.CityToCountryListFunction = function (req, res) {
  hotelDao.CityToCountryListFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.StarListFunction = function (req, res) {
  hotelDao.StarListFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
//

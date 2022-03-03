const { Sequelize } = require("sequelize");
const initModels = require("../models/init-models");

const sequelize = new Sequelize("Hotel", "sa", "1234", {
  host: "DESKTOP-A63U997",
  dialect: "mssql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});
const Model = new initModels(sequelize);
// async yap

exports.RoomTypeListFunction = async function (callback) {
  var FUNCTIONNAME = "RoomTypeListFunction";

  try {
    var result = await Model.RoomTypes.findAll(); //SELECT SORGUSU
    var returnVal = [
      {
        result: "Success",
        message: "",
        RoomTypes: result,
      },
    ];
  } catch (err) {
    var returnVal = {
      result: "Failed",
      message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
      RoomTypes: null,
    };
  }

  console.log(sqlStatement);

  callback(null, returnVal);
};

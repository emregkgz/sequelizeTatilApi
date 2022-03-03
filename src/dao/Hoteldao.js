//Config

const mssqlconfig = require("../../mssqlconfig");

// Include MSSQL Driver
var sql = require("mssql");

// Create Connection Pool
const pool = new sql.ConnectionPool(mssqlconfig, function (err) {
  console.log("Connected to SQL server successfully!");
});

// METHOD ...

exports.RoomTypeListFunction = function (callback) {
  var FUNCTIONNAME = "RoomTypeListFunction";

  var sqlStatement = `
  SELECT [RoomTypeID]
  ,[RoomTypeName]
FROM [dbo].[RoomTypes] 
ORDER BY [RoomTypeName] ASC	`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          RoomTypes: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            RoomTypes: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.HotelListFunction = function (callback) {
  var FUNCTIONNAME = "HotelListFunction";

  var sqlStatement = `
  SELECT [HotelID]
      ,[HotelName]
      ,s.[StarName]
      ,ht.[HotelTypeName]
      ,ct.[CountyName]
	    ,c.[CityName]
      ,[CreationDate]
      ,[UpdateDate]
  FROM [dbo].[Hotels] AS h

  JOIN [Stars] AS s ON  s.StarID=h.StarID
  JOIN [HotelTypes] AS ht ON ht.HotelTypeID=h.HotelTypeID
  JOIN [Counties] AS ct ON ct.CountyID=h.CountyID
  JOIN [Cities] AS c ON c.CityID=ct.CityID
  ORDER BY h.HotelID DESC	`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          Hotels: null,
        };
      } else {
        var returnVal = {
          result: "Success",
          message: "",
          Hotels: result.recordsets[0],
        };
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.PricesListFuntion = function (callback) {
  var FUNCTIONNAME = "PricesListFuntion";

  var sqlStatement = `
  SELECT [PriceID]
  ,h.HotelName
  ,s.StarName as 'Yıldız'
  ,ct.[CityName]
  ,c.[CountyName]
  ,p.StartDate
  ,p.EndDate  
  ,[Price]   
FROM [dbo].[Prices] as p
JOIN [RoomDetails] as rd on p.RoomDetailID=rd.RoomDetailID
JOIN [Hotels] as h on h.HotelID=rd.HotelID
JOIN [Counties] AS c ON c.CountyID=h.CountyID
JOIN [Stars] AS s ON s.StarID=h.StarID
JOIN [Cities] AS ct ON ct.CityID=c.CityID
WHERE h.HotelID=3 and s.StarID=5
ORDER BY p.Price DESC
	`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          Prices: null,
        };
      } else {
        var returnVal = {
          result: "Success",
          message: "",
          Prices: result.recordsets[0],
        };
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.CityToCountryListFunction = function (callback) {
  var FUNCTIONNAME = "CityToCountryListFunction";

  var sqlStatement = `
  SELECT c.[CityID]
  ,[CityName]
  ,ct.[CountyName]
FROM [dbo].[Cities] AS c
JOIN [Counties] AS ct ON ct.CityID=c.CityID
ORDER BY c.[CityID] ASC
	`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          Cities: null,
        };
      } else {
        var returnVal = {
          result: "Success",
          message: "",
          Cities: result.recordsets[0],
        };
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.StarListFunction = function (callback) {
  var FUNCTIONNAME = "StarListFunction";

  var sqlStatement = `
  SELECT [StarID]
  ,[StarName]
FROM [dbo].[Stars]
ORDER BY [StarName] DESC
	`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          Stars: null,
        };
      } else {
        var returnVal = {
          result: "Success",
          message: "",
          Stars: result.recordsets[0],
        };
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

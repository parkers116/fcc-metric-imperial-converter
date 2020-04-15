/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

var expect = require("chai").expect;
var ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  var convertHandler = new ConvertHandler();

  app.route("/api/convert").get(function (req, res) {
    var input = req.query.input;
    var initNum = convertHandler.getNum(input);
    var initUnit = convertHandler.getUnit(input);
    var returnNum = convertHandler.convert(initNum, initUnit);
    var returnUnit = convertHandler.getReturnUnit(initUnit);
    var toString = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );

    //res.json
    if (initNum === "invalid number") {
      if (initUnit === "invalid unit") {
        res.status(400).json({ error: "invalid number and unit" });
        return;
      }
      res.status(400).json({ error: "invalid number" });
      return;
    }
    if (initUnit === "no unit") {
      res.status(400).json({ error: "no unit" });
      return;
    }
    if (initUnit === "invalid unit") {
      res.status(400).json({ error: "invalid unit" });
      return;
    }

    res.json({
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: toString,
    });
  });
};

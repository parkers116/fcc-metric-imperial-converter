/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */
const unit = require("parse-unit");

function ConvertHandler() {
  this.getNum = function (input) {
    return unit(input)[0];
  };

  this.getUnit = function (input) {
    return unit(input)[1];
  };

  this.getReturnUnit = function (initUnit) {
    initUnit = initUnit.toLowerCase();

    switch (initUnit) {
      case "gal":
        return "l";
      case "l":
        return "gal";
      case "lbs":
        return "kg";
      case "kg":
        return "lbs";
      case "mi":
        return "km";
      case "km":
        return "mi";
      default:
        return "invalid unit";
    }
  };

  this.spellOutUnit = function (unit) {
    var result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    initUnit = initUnit.toLowerCase();

    if (typeof initNum !== "number") {
      return "invalid number";
    }

    switch (initUnit) {
      case "gal":
        return initNum * galToL;
      case "l":
        return initNum / galToL;
      case "lbs":
        return initNum * lbsToKg;
      case "kg":
        return initNum / lbsToKg;
      case "mi":
        return initNum * miToKm;
      case "km":
        return initNum / miToKm;
      default:
        return null;
    }
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };
}

module.exports = ConvertHandler;

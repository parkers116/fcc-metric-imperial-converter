/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */
function ConvertHandler() {
  this.getNum = function (input) {
    let result = input.match(/[0-9]+(\.[0-9]+)*(\/([0-9]+(\.[0-9]+)*))?/g);
    let isUnique = result !== null && result.length === 1 ? true : false;

    if (result !== null && !isUnique) {
      return "invalid number";
    }

    result = result === null ? 1 : eval(result[0]);
    result = parseFloat(result.toFixed(5));

    return result;
  };

  this.getUnit = function (input) {
    let result = input.match(/[A-Za-z]+$/);
    result = result === null ? "no unit" : result[0].toLowerCase();

    if (result !== "no unit" && this.spellOutUnit(result) === "invalid unit") {
      return "invalid unit";
    }
    return result;
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
        if (initUnit === "no unit") {
          return "no unit";
        }
        return "invalid unit";
    }
  };

  this.spellOutUnit = function (unit) {
    switch (unit) {
      case "gal":
        return "gallons";
      case "l":
        return "liters";
      case "lbs":
        return "pounds";
      case "kg":
        return "kilograms";
      case "mi":
        return "miles";
      case "km":
        return "kilometers";
      default:
        return "invalid unit";
    }
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result = 0;
    initUnit = initUnit.toLowerCase();

    if (typeof initNum !== "number") {
      return "invalid number";
    }
    if (initUnit == "invalid unit") {
      return "invalid unit";
    }

    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      default:
        result = 0;
    }
    return parseFloat(result.toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;

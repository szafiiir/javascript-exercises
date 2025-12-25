const convertToCelsius = function(fDegrees) {
  let celcius = (fDegrees - 32) * 5 / 9;
  if (!Number.isInteger(celcius)) {
    return +celcius.toPrecision(3);
  }
  else {
    return celcius;
  }
};


const convertToFahrenheit = function(cDegrees) {

  let fahrenheit = (cDegrees * 9 / 5 + 32);
  if (!Number.isInteger(fahrenheit)) {
    return +fahrenheit.toPrecision(4);
  }
  else {
    return fahrenheit;
  }


};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

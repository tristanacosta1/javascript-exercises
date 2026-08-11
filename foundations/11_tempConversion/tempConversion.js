const convertToCelsius = function(num) {
  num = (num - 32) * (5 / 9);
  let roundedNum = Math.round(num * 10) / 10;
  return roundedNum;
};

const convertToFahrenheit = function(num) {
  num = (num * (9 / 5)) + 32;
  let roundedNum = Math.round(num * 10) / 10;
  return roundedNum;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

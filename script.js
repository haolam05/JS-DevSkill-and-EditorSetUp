'use strict';

// Coding Challenge #1
const printForecast = function (arr) {
  let msg = '';
  if (arr.length > 0) {
    msg += '...';
    for (let i = 0; i < arr.length; i++) {
      msg += ` ${arr[i]}°C in ${i + 1} days ...`;
    }
    console.log(msg);
  }
};
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
printForecast([]);

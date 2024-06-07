// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const calcAge = birthYear => 2037 - birthYear;

/*

1. live server extension installed

2. npm install live-server -g
live-server
*/
console.log("live server testing");

const temps = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAltitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    console.log(typeof curTemp);
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
};

calcTempAltitude(temps);

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array1);
console.log(array2);
console.log(array3);

//prompt function always returns a string no matter what the input is in the prompt window
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: prompt("degree celsius"),
  };

  console.log(measurement);
  console.table(measurement);

  //debugger will open at this line
  debugger;
  console.log(measurement.value);
  console.warn(measurement.value);
  console.error(measurement.value);

  const m = Number(measurement.value);

  const kelvin = m + 273;
  return kelvin;
};

console.log(measureKelvin());

// El método forEach() ejecuta la función indicada una vez por cada elemento del array.

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    array[i] = callback(array[i]);
  }
}

function arrayIsEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

// TEST 1
const numbers = [0, 1, 2, 3, 4, 5];
const plusTen = (element) => element + 10;
const result1 = forEach(numbers, plusTen);
console.assert(arrayIsEqual(numbers, [10, 11, 12, 13, 14, 15]), {
  result: result1,
  message: "Test 1 no pasado",
});

// TEST 2
const cars = ["BMW", "HONDA", "VOLKSWAGEN", "SEAT"];
const lowCars = (vehicle) => vehicle.toLowerCase();
const result2 = forEach(cars, lowCars);
console.assert(arrayIsEqual(cars, ["bmw", "honda", "volkswagen", "seat"]), {
  result: result2,
  message: "Test 2 no pasado",
});

/* TEST 3

let arraysUsed1 = [];
let arraysUsed2 = [];

const originalArray = [10, 20, 30];
forEach(originalArray, (element, index, array) => {
  arraysUsed1.push(array);
});

originalArray.forEach((element, index, array) => {
  arraysUsed2.push(array);
});

console.assert(arrayIsEqual(arraysUsed1, arraysUsed2), {
  result: arraysUsed1,
  message: "Test 3 no pasado",
});
if (arrayIsEqual) console.log("Test 3 pasado.");
*/

const { assert } = require("chai");
const Biblio = require(".");

describe("forEach method", () => {
  it("Use of forEach method using mathematical operations", () => {
    const array1 = [0, 1, 2, 3, 4, 5];
    const biblio1 = new Biblio(0, 1, 2, 3, 4, 5);
    const resultarray1 = array1.forEach((element) => element + 10);
    const resultbiblio1 = biblio1.forEach((element) => element + 10);
    assert.equal(
      resultarray1,
      resultbiblio1,
      "The forEach method from Biblio does not work as the Array forEach method."
    );
  });
  it("Use of forEach method turning all the strings into lowerCase", () => {
    const array2 = ["BMW", "HONDA", "VOLKSWAGEN", "SEAT"];
    const biblio2 = new Biblio("BMW", "HONDA", "VOLKSWAGEN", "SEAT");
    const resultArray2 = array2.forEach((vehicle) => vehicle.toLowerCase());
    const resultBiblio2 = biblio2.forEach((vehicle) => vehicle.toLowerCase());
    assert.equal(
      resultArray2,
      resultBiblio2,
      "The forEach method from Biblio does not work as the Array forEach method."
    );
  });
});

/*
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
*/

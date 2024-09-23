const { assert } = require("chai");
const Biblio = require(".");

describe("Every method", () => {
  it("Use of every method", () => {
    const array1 = [1, 2, 3, 4, 5];
    const arrayBiblio1 = [1, 2, 3, 4, 5];
    const result1 = array1.every((currentValue) => currentValue < 40); // true
    const biblio1 = new Biblio(...arrayBiblio1); // Instancia de Biblio pasando los valores como argumentos
    const resultBiblio1 = biblio1.every((currentValue) => currentValue < 40); // true

    assert.equal(
      result1,
      resultBiblio1,
      "The every method from Biblio does not work as the Array every method."
    );
  });
});

/*
console.assert(result1 === array1.every((currentValue) => currentValue < 40), {
  result: result1,
  message: "Test 1 No pasado",
});

const array2 = [10, 20, 30, 40, -1];
const result2 = every(array2, (currentValue) => currentValue < 40);
console.assert(result2 === array2.every((currentValue) => currentValue < 40), {
  result: result2,
  message: "Test 2 No pasado",
});

const array3 = ["Alboroto"];
const result3 = every(array3, (currentValue) => currentValue < 40);
console.assert(result3 === array3.every((currentValue) => currentValue < 40), {
  result: result3,
  message: "Test 3 No pasado",
});
*/

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
  it("Use of every method", () => {
    const array2 = [10, 20, 30, 40, -1];
    const arrayBiblio2 = [10, 20, 30, 40, -1];
    const result2 = array2.every((currentValue) => currentValue < 40); // true
    const biblio2 = new Biblio(...arrayBiblio2); // Instancia de Biblio pasando los valores como argumentos
    const resultBiblio2 = biblio2.every((currentValue) => currentValue < 40); // true

    assert.equal(
      result2,
      resultBiblio2,
      "The every method from Biblio does not work as the Array every method."
    );
  });
  it("Use of every method", () => {
    const array3 = ["Alboroto"];
    const arrayBiblio3 = ["Alboroto"];
    const result3 = array3.every((currentValue) => currentValue < 40); // true
    const biblio3 = new Biblio(...arrayBiblio3); // Instancia de Biblio pasando los valores como argumentos
    const resultBiblio3 = biblio3.every((currentValue) => currentValue < 40); // true

    assert.equal(
      result3,
      resultBiblio3,
      "The every method from Biblio does not work as the Array every method."
    );
  });
});

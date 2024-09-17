const { assert } = require("chai");
const Biblio = require(".");

describe("Map method", () => {
  it("use of map passing each element of the array as a parameter of the callback function to by multiply 2", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    const resultArray = array.map((item) => item * 2);
    const resultBiblio = biblio.map((item) => item * 2);
    assert.deepEqual(
      resultBiblio,
      resultArray,
      "The map method of Bilio does not work as Array map method"
    );
  });
  it("use of map passing each element of the array as a parameter of the callback function to by divide 2", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    const resultArray = array.map((item) => item % 2);
    const resultBiblio = biblio.map((item) => item % 2);
    assert.deepEqual(
      resultBiblio,
      resultArray,
      "The map method of Bilio does not work as Array map method"
    );
  });
});

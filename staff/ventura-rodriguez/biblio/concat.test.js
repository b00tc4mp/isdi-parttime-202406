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

const result1 = concat([1, 2], [3, 4]);
console.assert(arrayIsEqual(result1, [1, 2].concat([3, 4])), {
  result: result1,
  message: "Test 1 No pasado",
});

const result2 = concat([1, 2], "foo");
console.assert(arrayIsEqual(result2, [1, 2].concat("foo")), {
  result: result2,
  message: "Test 2 No pasado",
});

const result3 = concat([1, 2], [3, 4], [5, 6], Infinity);
console.assert(arrayIsEqual(result3, [1, 2].concat([3, 4], [5, 6], Infinity)), {
  result: result3,
  message: "Test 3 No pasado",
});

const noArray = "foo";
const result4 = concat(noArray, [1, 2]);
console.assert(result4 === undefined, {
  result: result4,
  message: "Test 4 No pasado",
});

const { assert } = require("chai");
const Biblio = require(".");

describe("Copy-within method", () => {
  it("Use of copy-within method using regular range of length.", () => {
    const arr1 = [1, 2, 3, 4, 5, 6];
    const arr3 = [1, 2, 3, 4, 5, 6];
    const result1 = arr1.copyWithin(2, 0, 3);
    const biblio1 = new Biblio(arr3);
    const resultBiblio1 = biblio1.copyWithin(2, 0, 3);
    assert.deepEqual(
      resultBiblio1,
      result1,
      "The copy-within method from Biblio does not work as the Array copy-within method."
    );

    const arr2 = [7, 8, 9, 10, 11, 12];
    const result2 = arr2.copyWithin(3, 1, 4);
    const biblio2 = new Biblio(arr2);
    const resultBiblio2 = biblio2.copyWithin(3, 1, 4);
    assert.deepEqual(
      result2,
      resultBiblio2,
      "The concat method from Biblio does not work as the Array concat method."
    );
  });
});

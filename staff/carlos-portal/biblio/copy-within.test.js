const { assert } = require("chai");
const Biblio = require(".");

describe("Copy-within method", () => {
  it("Use of copy-within method using regular range of length.", () => {
    const arr1 = [1, 2, 3, 4, 5, 6];
    const result1 = arr1.copyWithin(2, 0, 3);
    const biblio1 = new Biblio(1, 2, 3, 4, 5, 6);
    const resultBiblio1 = biblio1.copyWithin(2, 0, 3);
    assert.equal(
      resultBiblio1[0],
      result1[0],
      "The copy-within method from Biblio does not work as the Array copy-within method."
    );
  });
});
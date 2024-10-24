const { assert } = require("chai");
const Biblio = require(".");

describe("shift method", () => {
  it("Use of shift method returning reasonable values", () => {
    const array1 = [1, 2, 3, 4, 5];
    const biblio1 = new Biblio(1, 2, 3, 4, 5);
    const resultarray1 = array1.shift();
    const resultbiblio1 = biblio1.shift();
    assert.equal(
      resultarray1,
      resultbiblio1,
      "The shift method from Biblio does not work as the Array shift method."
    );
  });

  it("Use of shift method returning null value", () => {
    const array2 = [null, "b", "c", "d"];
    const biblio2 = new Biblio(null, "b", "c", "d");
    const resultArray2 = array2.shift();
    const resultBiblio2 = biblio2.shift();
    assert.equal(
      resultArray2,
      resultBiblio2,
      "The shift method from Biblio does not work as the Array shift method."
    );
  });
});

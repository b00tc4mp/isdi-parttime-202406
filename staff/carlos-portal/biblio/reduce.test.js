const { assert } = require("chai");
const Biblio = require(".");

describe("reduce method", () => {
  it("Use of reduce method returning value of a reasonable values", () => {
    const array1 = [1, 2, 3, 4, 5];
    const biblio1 = new Biblio(1, 2, 3, 4, 5);
    const resultarray1 = array1.reduce((acc, curr) => acc + curr, 0);
    const resultbiblio1 = biblio1.reduce((acc, curr) => acc + curr, 0);
    assert.equal(
      resultarray1,
      resultbiblio1,
      "The reduce method from Biblio does not work as the Array at method."
    );
  });

});

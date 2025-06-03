const { assert } = require("chai");
const Biblio = require(".");

describe("At method", () => {
  it("Use of at method returning value of a reasonable index", () => {
    const array1 = ["No", "oigo", "nah"];
    const biblio1 = new Biblio("No", "oigo", "nah");
    const resultarray1 = array1.at(1);
    const resultbiblio1 = biblio1.at(1);
    assert.equal(
      resultarray1,
      resultbiblio1,
      "The at method from Biblio does not work as the Array at method."
    );
  });
  it("Use of at method returning value of a negative index", () => {
    const array2 = ["Pa", "hacerme", "el", "xulo"];
    const biblio2 = new Biblio("Pa", "hacerme", "el", "xulo");
    const resultArray2 = array2.at(-1);
    const resultBiblio2 = biblio2.at(-1);
    assert.equal(
      resultArray2,
      resultBiblio2,
      "The at method from Biblio does not work as the Array at method."
    );
  });
  it("Use of at method returning value of a null index", () => {
    const array3 = ["No", "oigo", "nah"];
    const biblio3 = new Biblio("No", "oigo", "nah");
    const resultArray3 = array3.at(null);
    const resultBiblio3 = biblio3.at(null);
    assert.equal(
      resultArray3,
      resultBiblio3,
      "The at method from Biblio does not work as the Array at method."
    );
  });
});

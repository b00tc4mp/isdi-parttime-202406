const { assert } = require("chai");
const Biblio = require(".");

describe("At method", () => {
  it("Use of at method returning value of a reasonable index", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    const resultBiblio = biblio.at(3);
    const resultArray = array.at(3);
    assert.equal(
      resultBiblio,
      resultArray,
      "The at method of Bilio does not work as Array at method"
    );
  });
  it("Use of at for not positive value", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    const resultBiblio = biblio.at(-2);
    const resultArray = array.at(-2);
    assert.equal(
      resultBiblio,
      resultArray,
      "The at method of Bilio does not work as Array at method"
    );
  });
  it("Use of at for out of range index", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    const resultBiblio = biblio.at(20);
    const resultArray = array.at(20);
    assert.equal(
      resultBiblio,
      resultArray,
      "The at method of Bilio does not work as Array at method"
    );
  });
  it("Use of at for out of range index non positive case", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    const resultBiblio = biblio.at(-30);
    const resultArray = array.at(-30);
    assert.equal(
      resultBiblio,
      resultArray,
      "The at method of Bilio does not work as Array at method"
    );
  });
  it("Use of at for out of range index non positive case", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    const resultBiblio = biblio.at(-30);
    const resultArray = array.at(-30);
    assert.equal(
      resultBiblio,
      resultArray,
      "The at method of Bilio does not work as Array at method"
    );
  });
});

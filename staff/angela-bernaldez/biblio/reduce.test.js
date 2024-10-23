const { expect } = require("chai");
const Biblio = require(".");

describe("Reduce method", () => {
  it("Use reduce to sum all values - no initial value passed", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    const resultArray = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    const resultBiblio = biblio.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal(36);
  });

  it("Use reduce to sum all values - initial value passed", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    const resultArray = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue, 10
    );
    const resultBiblio = biblio.reduce(
      (accumulator, currentValue) => accumulator + currentValue, 10
    );
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal(46);
  });
});
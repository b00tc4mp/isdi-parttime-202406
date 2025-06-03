const { expect } = require("chai");
const Biblio = require(".");

describe("Reduce method", () => {
  it("Use reduce to sum all values of biblio", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    const resultArray = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    const resultBiblio = biblio.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    expect(biblio).to.be.deep.equal(new Biblio(1, 2, 3, 4, 5, 6, 7, 8));
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal(36);
  });
});

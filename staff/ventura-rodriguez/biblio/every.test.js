const { expect } = require("chai");
const Biblio = require(".");

describe("Every method", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);

  it("Use every evaluating each typeof every element with reasonable values", () => {
    const resultArray = array.every((item) => typeof item === "number");
    const resultBiblio = biblio.every((item) => typeof item === "number");
    expect(resultBiblio).to.be.equal(resultArray).to.be.true;
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
  });

  it("Use every evaluating if every element is 4 number", () => {
    const resultArray = array.every((item) => item === 4);
    const resultBiblio = biblio.every((item) => item === 4);
    expect(resultBiblio).to.be.equal(resultArray).to.be.false;
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
  });
});

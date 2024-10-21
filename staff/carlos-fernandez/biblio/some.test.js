const { expect } = require("chai");
const Biblio = require(".");

describe("Every method", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);

  it("Use some evaluating each typeof some element with reasonable values", () => {
    const resultArray = array.some((item) => typeof item === "string");
    const resultBiblio = biblio.some((item) => typeof item === "string");
    expect(resultBiblio).to.be.equal(resultArray).to.be.false;
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
  });

  it("Use some evaluating if some element is 4 number", () => {
    const resultArray = array.some((item) => item === 4);
    const resultBiblio = biblio.some((item) => item === 4);
    expect(resultBiblio).to.be.true;
    expect(resultBiblio).to.be.equal(resultArray);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
  });
});

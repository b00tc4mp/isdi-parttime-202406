const { expect } = require("chai");
const Biblio = require(".");

describe("IndexOf method", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);

  it("Use indexOf evaluating a value passing no fromIndex argument", () => {
    const resultArray = array.indexOf(5);
    const resultBiblio = biblio.indexOf(5);
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal(4);
  });

  it("Use indexOf evaluating a value passing no fromIndex argument", () => {
    const resultArray = array.indexOf(10);
    const resultBiblio = biblio.indexOf(10);
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal(-1);
  });

  it("Use indexOf evaluating a value passing fromIndex argument", () => {
    const resultArray = array.indexOf(5, 1);
    const resultBiblio = biblio.indexOf(5, 1);
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal(4);
  });

  it("Use indexOf evaluating a value passing fromIndex argument", () => {
    const resultArray = array.indexOf(5, 6);
    const resultBiblio = biblio.indexOf(5, 6);
    expect(resultArray).to.be.equal(resultBiblio).to.be.equal(-1);
  });
});
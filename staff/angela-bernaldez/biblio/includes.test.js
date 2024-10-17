const { expect } = require("chai");
const Biblio = require(".");

describe("Includes method", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);

  it("Use includes evaluating if array contains a value - passing no fromPosition argument", () => {
    const resultArray = array.includes(1);
    const resultBiblio = biblio.includes(1);
    expect(resultBiblio).to.be.equal(resultArray).to.be.true;
  });

  it("Use includes evaluating if array contains a value - passing fromPosition argument", () => {
    const resultArray = array.includes(1, 2);
    const resultBiblio = biblio.includes(1, 2);
    expect(resultBiblio).to.be.equal(resultArray).to.be.false;
  });

  it("Use includes evaluating if array contains a value - passing fromPosition argument", () => {
    const resultArray = array.includes(8, 1);
    const resultBiblio = biblio.includes(8, 1);
    expect(resultBiblio).to.be.equal(resultArray).to.be.true;
  });

  it("Use includes evaluating if array contains an undefined value", () => {
    const resultArray = array.includes(undefined);
    const resultBiblio = biblio.includes(undefined);
    expect(resultBiblio).to.be.equal(resultArray).to.be.false;
  });
});
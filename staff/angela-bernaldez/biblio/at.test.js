const { expect } = require("chai");
const Biblio = require(".");

describe("At method", () => {
  const array = [1, 2, 3, 4, 5, 6]
  const biblio = new Biblio(1, 2, 3, 4, 5, 6)

  it("Use at method returning value of a reasonable index", () => {
    const resultBiblio = biblio.at(3);
    const resultArray = array.at(3);
    expect(resultBiblio).to.be.equal(resultArray);
  });
  it("Use at for not positive value", () => {
    const resultBiblio = biblio.at(-4);
    const resultArray = array.at(-4);
    expect(resultBiblio).to.be.equal(resultArray);
  });
  it("Use at for out of range index", () => {
    const resultBiblio = biblio.at(10);
    const resultArray = array.at(10);
    expect(resultBiblio).to.be.equal(resultArray);
  });
  it("Use at for out of range index non positive case", () => {
    const resultBiblio = biblio.at(-30);
    const resultArray = array.at(-30);
    expect(resultBiblio).to.be.equal(resultArray);
  });
});
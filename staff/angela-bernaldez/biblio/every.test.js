const { expect } = require("chai");
const Biblio = require(".");

describe("Every method", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);

  it("Use every evaluating each element type", () => {
    const resultArray = array.every((item) => typeof item === "number");
    const resultBiblio = biblio.every((item) => typeof item === "number");
    expect(resultBiblio).to.be.equal(resultArray).to.be.true;
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
  });

  it("Use every evaluating if every element is equal to a specific number", () => {
    const resultArray = array.every((item) => item === 4);
    const resultBiblio = biblio.every((item) => item === 4);
    expect(resultBiblio).to.be.equal(resultArray).to.be.false;
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
  });

  it("Use every evaluating if every element is even", () => {
    const resultArray = array.every((item) => item % 2 === 0);
    const resultBiblio = biblio.every((item) => item % 2 === 0);
    expect(resultBiblio).to.be.equal(resultArray).to.be.false;
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
  });

  it("Use every evaluating if every element is positive", () => {
    const resultArray = array.every((item) => item > 0);
    const resultBiblio = biblio.every((item) => item > 0);
    expect(resultBiblio).to.be.equal(resultArray).to.be.true;
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
  });
});
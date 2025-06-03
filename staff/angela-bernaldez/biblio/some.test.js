const { expect } = require("chai");
const Biblio = require(".");

describe("Some method", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);

  it("Use some evaluating each element type", () => {
    const resultArray = array.some((item) => typeof item === "number");
    const resultBiblio = biblio.some((item) => typeof item === "number");
    expect(resultBiblio).to.be.equal(resultArray).to.be.true;
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
  });

  it("Use some evaluating if at least one element is equal to a specific number", () => {
    const resultArray = array.some((item) => item === 4);
    const resultBiblio = biblio.some((item) => item === 4);
    expect(resultBiblio).to.be.equal(resultArray).to.be.true;
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
  });

  it("Use some evaluating if at least one element is even", () => {
    const resultArray = array.some((item) => item % 2 === 0);
    const resultBiblio = biblio.some((item) => item % 2 === 0);
    expect(resultBiblio).to.be.equal(resultArray).to.be.true;
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
  });

  it("Use some evaluating if at least one element is positive", () => {
    const resultArray = array.some((item) => item > 0);
    const resultBiblio = biblio.some((item) => item > 0);
    expect(resultBiblio).to.be.equal(resultArray).to.be.true;
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
  });
});
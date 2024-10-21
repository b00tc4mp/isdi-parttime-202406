const { expect } = require("chai");
const Biblio = require(".");

describe("Filter method", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);

  it("Use filter evaluating each element type", () => {
    const resultArray = array.filter((item) => typeof item === "number");
    const resultBiblio = biblio.filter((item) => typeof item === "number");
    for (let i = 0; i < array.length; i++)
      expect(biblio[i]).to.be.equal(array[i]);
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(8);
  });

  it("Use filter evaluating if every element is equal to a specific number", () => {
    const resultArray = array.filter((item) => item === 4);
    const resultBiblio = biblio.filter((item) => item === 4);
    for (let i = 0; i < array.length; i++)
      expect(biblio[i]).to.be.equal(array[i]);
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(1);
  });

  it("Use filter evaluating if every element is even", () => {
    const resultArray = array.filter((item) => item % 2 === 0);
    const resultBiblio = biblio.filter((item) => item % 2 === 0);
    for (let i = 0; i < array.length; i++)
      expect(biblio[i]).to.be.equal(array[i]);
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(4);
  });

  it("Use filter evaluating if every element is positive", () => {
    const resultArray = array.filter((item) => item > 0);
    const resultBiblio = biblio.filter((item) => item > 0);
    for (let i = 0; i < array.length; i++)
      expect(biblio[i]).to.be.equal(array[i]);
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(8);
  });
});
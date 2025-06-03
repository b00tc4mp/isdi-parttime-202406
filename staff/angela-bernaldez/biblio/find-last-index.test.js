const { expect } = require("chai");
const Biblio = require(".");


describe("findLastIndex method", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);

  it("Use findLastIndex evaluating even element", () => {
    const resultArray = array.findLastIndex((item) => item % 2 === 0);
    const resultBiblio = biblio.findLastIndex((item) => item % 2 === 0);
    for (let i = 0; i < array.length; i++)
        expect(biblio[i]).to.be.equal(array[i]);
    expect(resultArray).to.be.equal(resultBiblio).to.be.equal(7);
  });

  it("Use findLastIndex evaluating odd element", () => {
    const resultArray = array.findLastIndex((item) => item % 2 === 1);
    const resultBiblio = biblio.findLastIndex((item) => item % 2 === 1);
    for (let i = 0; i < array.length; i++)
        expect(biblio[i]).to.be.equal(array[i]);
    expect(resultArray).to.be.equal(resultBiblio).to.be.equal(6);
  });

  it("Use findLastIndex evaluating positive element", () => {
    const resultArray = array.findLastIndex((item) => item > 0);
    const resultBiblio = biblio.findLastIndex((item) => item > 0);
    for (let i = 0; i < array.length; i++)
        expect(biblio[i]).to.be.equal(array[i]);
    expect(resultArray).to.be.equal(resultBiblio).to.be.equal(7);
  });

  it("Use findLastIndex evaluating negative element - condition not fulfilled", () => {
    const resultArray = array.findLastIndex((item) => item < 0);
    const resultBiblio = biblio.findLastIndex((item) => item < 0);
    for (let i = 0; i < array.length; i++)
        expect(biblio[i]).to.be.equal(array[i]);
    expect(resultArray).to.be.equal(resultBiblio).to.be.equal(-1);
  });
});
const { expect } = require("chai");
const Biblio = require(".");

describe("findIndex method", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);

  it("Use findIndex evaluating even element", () => {
    const resultArray = array.findIndex((item) => item % 2 === 0);
    const resultBiblio = biblio.findIndex((item) => item % 2 === 0);
    for (let i = 0; i < array.length; i++)
        expect(biblio[i]).to.be.equal(array[i]);
    expect(resultArray).to.be.equal(resultBiblio).to.be.equal(1);
  });

  it("Use findIndex evaluating odd element", () => {
    const resultArray = array.findIndex((item) => item % 2 === 1);
    const resultBiblio = biblio.findIndex((item) => item % 2 === 1);
    for (let i = 0; i < array.length; i++)
        expect(biblio[i]).to.be.equal(array[i]);
    expect(resultArray).to.be.equal(resultBiblio).to.be.equal(0);
  });

  it("Use findIndex evaluating positive element", () => {
    const resultArray = array.findIndex((item) => item > 0);
    const resultBiblio = biblio.findIndex((item) => item > 0);
    for (let i = 0; i < array.length; i++)
        expect(biblio[i]).to.be.equal(array[i]);
    expect(resultArray).to.be.equal(resultBiblio).to.be.equal(0);
  });

  it("Use findIndex evaluating negative element - condition not fulfilled", () => {
    const resultArray = array.findIndex((item) => item < 0);
    const resultBiblio = biblio.findIndex((item) => item < 0);
    for (let i = 0; i < array.length; i++)
        expect(biblio[i]).to.be.equal(array[i]);
    expect(resultArray).to.be.equal(resultBiblio).to.be.equal(-1);
  });
});
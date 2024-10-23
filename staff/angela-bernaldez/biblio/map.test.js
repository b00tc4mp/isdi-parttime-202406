const { expect } = require("chai");
const Biblio = require(".");

describe("Map method", () => {
  it("Use map multiplying each element by 2", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    const resultArray = array.map((item) => item * 2);
    const resultBiblio = biblio.map((item) => item * 2);
    for (let i = 0; i < array.length; i++)
        expect(biblio[i]).to.be.equal(array[i]);
    for (let i = 0; i < resultArray.length; i++)
        expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(8);
  });

  it("Use map converting each element to its opposite", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    const resultArray = array.map((item) => -item );
    const resultBiblio = biblio.map((item) => -item );
    for (let i = 0; i < array.length; i++)
        expect(biblio[i]).to.be.equal(array[i]);
    for (let i = 0; i < resultArray.length; i++)
        expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(8);
  });

  it("Use map converting each element to its inverse", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    const resultArray = array.map((item) => 1 / item);
    const resultBiblio = biblio.map((item) => 1 / item);
    for (let i = 0; i < array.length; i++)
        expect(biblio[i]).to.be.equal(array[i]);
    for (let i = 0; i < resultArray.length; i++)
        expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(8);
  });

  it("Use map setting each element to a constant value", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    const resultArray = array.map((item) => 0);
    const resultBiblio = biblio.map((item) => 0);
    for (let i = 0; i < array.length; i++)
        expect(biblio[i]).to.be.equal(array[i]);
    for (let i = 0; i < resultArray.length; i++)
        expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(8);
  });
});
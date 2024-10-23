const { expect } = require("chai");
const Biblio = require(".");

describe("Shift method", () => {

  it("Use shift method with an array of strings", () => {
    const array = ['banana', 'apple', 'watermelon', 'plum'];
    const biblio = new Biblio('banana', 'apple', 'watermelon', 'plum');
    const resultArray = array.shift();
    const resultBiblio = biblio.shift();
    for (let i = 0; i < array.length; i++)
        expect(biblio[i]).to.be.equal(array[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(3);
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal('banana');
  });

  it("Use shift method with an array of numbers", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    const resultArray = array.shift();
    const resultBiblio = biblio.shift();
    for (let i = 0; i < array.length; i++)
        expect(biblio[i]).to.be.equal(array[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(7);
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal(1);
  });
});
const { expect } = require("chai");
const Biblio = require(".");

describe("Push method", () => {

  it("Use push method with a single value to add", () => {
    const array = ['banana', 'apple', 'watermelon', 'plum'];
    const biblio = new Biblio('banana', 'apple', 'watermelon', 'plum');
    const resultArray = array.push('lemon');
    const resultBiblio = biblio.push('lemon');
    for (let i = 0; i < array.length; i++)
        expect(biblio[i]).to.be.equal(array[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(5);
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal(5);
  });

  it("Use push method with two values to add", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    const resultArray = array.push(9, 10);
    const resultBiblio = biblio.push(9, 10);
    for (let i = 0; i < array.length; i++)
        expect(biblio[i]).to.be.equal(array[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(10);
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal(10);
  });
});
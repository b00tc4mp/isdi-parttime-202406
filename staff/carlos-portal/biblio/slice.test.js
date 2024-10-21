const { expect } = require("chai");
const Biblio = require(".");

describe("Slice method", () => {
  it("Should return the same array as the original one.", () => {
    const array = [1, 2, 3, 4, 5];
    const biblio = new Biblio(1, 2, 3, 4, 5);

    const resultArray = array.slice();
    const resultBiblio = biblio.slice();

    expect(biblio.slice()).to.be.deep.equal(resultBiblio);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(5);
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
  });

  it("Should return a new array from the start index to the end of the array", () => {
    const array = [1, 2, 3, 4, 5];
    const biblio = new Biblio(1, 2, 3, 4, 5);

    const resultArray = array.slice(2);
    const resultBiblio = biblio.slice(2);

    expect(resultBiblio).to.be.deep.equal(new Biblio(3, 4, 5));
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(3);
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
  });

  it("Should return a new array from the start index to the end index", () => {
    const array = [1, 2, 3, 4, 5];
    const biblio = new Biblio(1, 2, 3, 4, 5);

    const resultArray = array.slice(2, 3);
    const resultBiblio = biblio.slice(2, 3);

    expect(resultBiblio).to.be.deep.equal(new Biblio(3));
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(1);
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
  });})

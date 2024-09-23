const { expect } = require("chai");
const Biblio = require(".");

describe("CopyWithin method", () => {
  it("Use copyWithin using target and start parameters with reasonable values", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    const resultArray = array.copyWithin(0, 5);
    const resultBiblio = biblio.copyWithin(0, 5);
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(8);
    expect(biblio).to.be.deep.equal(resultBiblio);
  });

  it("Use copyWithin using all parameters with reasonable values", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    const resultArray = array.copyWithin(0, 3, 4);
    const resultBiblio = biblio.copyWithin(0, 3, 4);
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(8);
    expect(biblio).to.be.deep.equal(resultBiblio);
  });

  it("Use copyWithin using all parameters with negative values", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    const resultArray = array.copyWithin(-2, -3, -1);
    const resultBiblio = biblio.copyWithin(-2, -3, -1);
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(8);
    expect(biblio).to.be.deep.equal(resultBiblio);
  });
});

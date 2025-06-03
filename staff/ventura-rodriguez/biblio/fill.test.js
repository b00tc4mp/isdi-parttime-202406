const { expect } = require("chai");
const Biblio = require(".");

describe("Fill method", () => {
  it("Use fill with reasonable value parameter", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    const resultArray = array.fill(6);
    const resultBiblio = biblio.fill(6);
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio).to.be.deep.equal(resultBiblio);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
  });

  it("Use fill with value and start parameters with reasonable values", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    const resultArray = array.fill(5, 1);
    const resultBiblio = biblio.fill(5, 1);
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio).to.be.deep.equal(resultBiblio);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
  });

  it("Use fill with all parameters with reasonable values", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    const resultArray = array.fill(0, 2, 4);
    const resultBiblio = biblio.fill(0, 2, 4);
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio).to.be.deep.equal(resultBiblio);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
  });

  it("Use fill with all parameters with negative values", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    const resultArray = array.fill(4, -3, -2);
    const resultBiblio = biblio.fill(4, -3, -2);
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio).to.be.deep.equal(resultBiblio);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
  });
});

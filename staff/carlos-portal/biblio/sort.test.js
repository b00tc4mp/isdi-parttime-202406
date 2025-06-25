const { expect } = require("chai");
const Biblio = require(".");

describe("Sort method", () => {
  it("Use sort without callback parameter", () => {
    const array = [1, 30, 4, 21, 100000];
    const biblio = new Biblio(1, 30, 4, 21, 100000);
    const resultArray = array.sort();
    const resultBiblio = biblio.sort();
    expect(resultBiblio).to.be.deep.equal(new Biblio(1, 100000, 21, 30, 4));
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(5);
  });

  it("Use sort using callback parameter", () => {
    const array = [1, 30, 4, 21, 100000];
    const biblio = new Biblio(1, 30, 4, 21, 100000);
    const resultArray = array.sort((a, b) => b - a);
    const resultBiblio = biblio.sort((a, b) => b - a);
    expect(resultBiblio).to.be.deep.equal(new Biblio(100000, 30, 21, 4, 1));
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(5);
  });
});

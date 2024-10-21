const { expect } = require("chai");
const Biblio = require(".");

describe("Reverse method", () => {
  it("Should reverse elements of biblio", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    const resultArray = array.reverse();
    const resultBiblio = biblio.reverse();
    expect(biblio).to.be.equal(resultBiblio);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(8);
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
  });
});

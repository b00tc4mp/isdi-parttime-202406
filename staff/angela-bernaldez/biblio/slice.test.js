const { expect } = require("chai");
const Biblio = require(".");

describe("Slice method", () => {
  const array = ['banana', 'apple', 'watermelon', 'plum'];
  const biblio = new Biblio('banana', 'apple', 'watermelon', 'plum');

  it("Use slice to create a copy of the array", () => {
    const resultArray = array.slice();
    const resultBiblio = biblio.slice();
    expect(biblio).to.be.deep.equal(
        new Biblio('banana', 'apple', 'watermelon', 'plum')
    );
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(4);
  });

  it("Use slice passing only start argument", () => {
    const resultArray = array.slice(1);
    const resultBiblio = biblio.slice(1);
    expect(biblio).to.be.deep.equal(
      new Biblio('banana', 'apple', 'watermelon', 'plum')
    );
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(3);
  });

  it("Use slice passing start and end argument", () => {
    const resultArray = array.slice(1, 2);
    const resultBiblio = biblio.slice(1, 2);
    expect(biblio).to.be.deep.equal(
      new Biblio('banana', 'apple', 'watermelon', 'plum')
    );
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(1);
  });
});
const { expect } = require("chai");
const Biblio = require(".");

describe("Concat method", () => {
  const array = [1, 2];
  const biblio = new Biblio(1, 2);

  it("Use concat passing only one argument to Biblio", () => {
    const resultArray = array.concat([3, 4]);
    const resultBiblio = biblio.concat(new Biblio(3, 4));
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(2);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(4);
  });

  it("Use concat passing not only one argument to Biblio", () => {
    const resultArray = array.concat("foo");
    const resultBiblio = biblio.concat("foo");
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(2);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(3);
  });

  it("Use concat passing multiple and mixed type arguments to Biblio", () => {
    const resultArray = array.concat([3, 4], [5, 6], Infinity);
    const resultBiblio = biblio.concat(
      new Biblio(3, 4),
      new Biblio(5, 6),
      Infinity
    );
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(2);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(7);
  });
});
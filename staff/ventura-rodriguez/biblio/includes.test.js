const { expect } = require("chai");
const Biblio = require(".");

describe("Includes method", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);

  it("Use includes with searchElement parameter", () => {
    const resultArray = array.includes(4);
    const resultBiblio = biblio.includes(4);
    expect(biblio).to.be.deep.equal(new Biblio(1, 2, 3, 4, 5, 6, 7, 8));
    expect(resultBiblio).to.be.equal(resultArray);
  });

  it("Use includes with searchElement and fromIndex parameters", () => {
    const resultArray = array.includes(3, 5);
    const resultBiblio = biblio.includes(3, 5);
    expect(biblio).to.be.deep.equal(new Biblio(1, 2, 3, 4, 5, 6, 7, 8));
    expect(resultBiblio).to.be.equal(resultArray);
  });

  it("Use includes passing NaN as searchElement parameter", () => {
    const resultArray = array.includes(NaN);
    const resultBiblio = biblio.includes(NaN);
    expect(biblio).to.be.deep.equal(new Biblio(1, 2, 3, 4, 5, 6, 7, 8));
    expect(resultBiblio).to.be.equal(resultArray);
  });
});

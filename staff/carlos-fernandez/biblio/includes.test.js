const { expect } = require("chai");
const Biblio = require(".");

describe("Includes method", () => {
  const array = [1, 2, 3, 4, 5];
  const biblio = new Biblio(1, 2, 3, 4, 5);

  it("Use includes with searchElement parameter", () => {
    const resultArray = array.includes(3);
    const resultBiblio = biblio.includes(3);
    expect(biblio).to.be.deep.equal(new Biblio(1, 2, 3, 4, 5));
    expect(resultBiblio).to.be.equal(resultArray);
  });

  it("Use includes with searchElement and fromIndex parameters", () => {
    const resultArray = array.includes(6);
    const resultBiblio = biblio.includes(6);
    expect(biblio).to.be.deep.equal(new Biblio(1, 2, 3, 4, 5));
    expect(resultBiblio).to.be.equal(resultArray);
  });

  it("Use includes with searchElement and fromIndex parameters", () => {
    const resultArray = array.includes(2, 2);
    const resultBiblio = biblio.includes(2, 2);
    expect(biblio).to.be.deep.equal(new Biblio(1, 2, 3, 4, 5));
    expect(resultBiblio).to.be.equal(resultArray);
  });

  it("Use includes with searchElement and fromIndex parameters", () => {
    const resultArray = array.includes(4, -2);
    const resultBiblio = biblio.includes(4, -2);
    expect(biblio).to.be.deep.equal(new Biblio(1, 2, 3, 4, 5));
    expect(resultBiblio).to.be.equal(resultArray);
  });
});

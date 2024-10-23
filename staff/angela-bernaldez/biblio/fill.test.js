const { expect } = require("chai");
const Biblio = require(".");

describe("Fill method", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);

  it("Use fill passing no values for start and end positions", () => {
    const resultArray = array.fill(0);
    const resultBiblio = biblio.fill(0);
    for (let i = 0; i < resultArray.length; i++)
        expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(8);
    expect(biblio).to.be.deep.equal(resultBiblio);
  });

  it("Use fill passing positive values for start and end positions", () => {
    const resultArray = array.fill(10, 2, 8);
    const resultBiblio = biblio.fill(10, 2, 8);
    for (let i = 0; i < resultArray.length; i++)
        expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(8);
    expect(biblio).to.be.deep.equal(resultBiblio);
  });

  it("Use fill passing negative values for both start and end positions", () => {
    const resultArray = array.fill(10, -4, -2);
    const resultBiblio = biblio.fill(10, -4, -2);
    for (let i = 0; i < resultArray.length; i++)
        expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(8);
    expect(biblio).to.be.deep.equal(resultBiblio);
  });

  it("Use fill passing start position greater than end position", () => {
    const resultArray = array.fill(10, -2, -4);
    const resultBiblio = biblio.fill(10, -2, -4);
    for (let i = 0; i < resultArray.length; i++)
        expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(8);
    expect(biblio).to.be.deep.equal(resultBiblio);
  });
});
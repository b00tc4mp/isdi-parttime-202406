const { expect } = require("chai");
const Biblio = require(".");

describe("Pop method", () => {
  it("Use pop with resonable biblio instance", () => {
    const array = [1, 2, 3, 4, 5];
    const biblio = new Biblio(1, 2, 3, 4, 5);
    const resultArray = array.pop();
    const resultBiblio = biblio.pop();
    expect(biblio).to.be.deep.equal(new Biblio(1, 2, 3, 4, 5));
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal(5);
  });
});

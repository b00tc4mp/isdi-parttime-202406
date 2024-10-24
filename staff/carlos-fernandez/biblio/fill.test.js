const { expect } = require("chai");
const Biblio = require(".");

/*
const result3 = fill([1, 2, 3, 4], 6, -3);
console.assert(arraysEqual(result3, [1, 6, 6, 6]), {
  result: result3,
  message: "Test 3 no pasado",
});
*/
describe("Fill method", () => {
  it("Use fill with reasonable value parameter", () => {
    const array = [0, 1, 2, 3];
    const biblio = new Biblio(0, 1, 2, 3);
    const resultArray = array.fill(0, 1, 2);
    const resultBiblio = biblio.fill(0, 1, 2);
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio).to.be.deep.equal(resultBiblio);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(4);
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
    const array = [4, 5, 6, 7, 8];
    const biblio = new Biblio(4, 5, 6, 7, 8);
    const resultArray = array.fill(0, 3, 4);
    const resultBiblio = biblio.fill(0, 3, 4);
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio).to.be.deep.equal(resultBiblio);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(5);
  });
});

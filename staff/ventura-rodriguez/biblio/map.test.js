const { expect } = require("chai");
const Biblio = require(".");

describe("Map method", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);

  it("Use map passing each element of the array as a parameter of the callback function to by multiply 2", () => {
    const resultArray = array.map((item) => item * 2);
    const resultBiblio = biblio.map((item) => item * 2);
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(resultBiblio.length).to.be.equal(biblio.length).to.be.equal(8);
  });

  it("Use map passing each element of the array as a parameter of the callback function to by divide 2", () => {
    const resultArray = array.map((item) => item % 2);
    const resultBiblio = biblio.map((item) => item % 2);
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(resultBiblio.length).to.be.equal(biblio.length).to.be.equal(8);
  });
});

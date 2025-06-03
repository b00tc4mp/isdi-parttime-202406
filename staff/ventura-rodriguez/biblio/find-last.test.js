const { expect } = require("chai");
const Biblio = require(".");

describe("FindLast method", () => {
  const array = [1, 2, 3, 4, "a", "b", "c", "b", "e"];
  const biblio = new Biblio(1, 2, 3, 4, "a", "b", "c", "b", "e");

  it('Use findLast passing each element of the array as a parameter of the callback function to find index of "b"', () => {
    const resultArray = array.findLast((item) => item === "b");
    const resultBiblio = biblio.findLast((item) => item === "b");
    for (let i = 0; i < array.length; i++)
      expect(biblio[i]).to.be.equal(array[i]);
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal("b");
  });

  it("Use findLast passing each element of the array as a parameter of the callback function to search by typeof operator", () => {
    const resultArray = array.findLast((item) => typeof item === "boolean");
    const resultBiblio = biblio.findLast((item) => typeof item === "boolean");
    for (let i = 0; i < array.length; i++)
      expect(biblio[i]).to.be.equal(array[i]);
    expect(resultBiblio).to.be.equal(resultArray).to.be.undefined;
  });
});

const { expect } = require("chai");
const Biblio = require(".");

describe("Find method", () => {
  const array = [1, 2, 3, 4, "a", "b", "c", "b", "e"];
  const biblio = new Biblio(1, 2, 3, 4, "a", "b", "c", "b", "e");

  it('Use find passing each element of the array as a parameter of the callback function to find index of "b"', () => {
    const resultArray = array.find((item) => item === "b");
    const resultBiblio = biblio.find((item) => item === "b");
    for (let i = 0; i < array.length; i++)
      expect(biblio[i]).to.be.equal(array[i]);
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal("b");
  });

  it("Use find passing each element of the array as a parameter of the callback function to search by typeof operator", () => {
    const resultArray = array.find((item) => typeof item === "boolean");
    const resultBiblio = biblio.find((item) => typeof item === "boolean");
    for (let i = 0; i < array.length; i++)
      expect(biblio[i]).to.be.equal(array[i]);
    expect(resultBiblio).to.be.equal(resultArray).to.be.undefined;
  });
});

const { expect } = require("chai");
const Biblio = require(".");

describe("FindIndex method", () => {
  const array = [1, 2, 3, 4, "a", "b", "c", "b", "e"];
  const biblio = new Biblio(1, 2, 3, 4, "a", "b", "c", "b", "e");

  it('Use findIndex passing each element of the array as a parameter of the callback function to find index of "b"', () => {
    const resultArray = array.findIndex((item) => item === "b");
    const resultBiblio = biblio.findIndex((item) => item === "b");
    for (let i = 0; i < array.length; i++)
      expect(biblio[i]).to.be.equal(array[i]);
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal(5);
  });

  it("Use findIndex passing each element of the array as a parameter of the callback function to search by typeof operator", () => {
    const resultArray = array.findIndex((item) => typeof item === "boolean");
    const resultBiblio = biblio.findIndex((item) => typeof item === "boolean");
    for (let i = 0; i < array.length; i++)
      expect(biblio[i]).to.be.equal(array[i]);
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal(-1);
  });
});

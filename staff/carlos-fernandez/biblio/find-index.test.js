const { expect } = require("chai");
const Biblio = require(".");

describe("FindIndex method", () => {
  const array = [1, "z", "x", "w", "a", "b", "c", "b", "e"];
  const biblio = new Biblio(1, "z", "x", "w", "a", "b", "c", "b", "e");

  it('Use findIndex passing each element of the array as a parameter of the callback function to find index of "e"', () => {
    const resultArray = array.findIndex((item) => item === "e");
    const resultBiblio = biblio.findIndex((item) => item === "e");
    for (let i = 0; i < array.length; i++)
      expect(biblio[i]).to.be.equal(array[i]);
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal(8);
  });

  it("Use findIndex passing each element of the array as a parameter of the callback function to search by typeof operator", () => {
    const resultArray = array.findIndex((item) => typeof item === "number");
    const resultBiblio = biblio.findIndex((item) => typeof item === "number");
    for (let i = 0; i < array.length; i++)
      expect(biblio[i]).to.be.equal(array[i]);
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal(0);
  });
  it("Use findIndex passing each element of the array as a parameter of the callback function to search by typeof operator", () => {
    const resultArray = array.findIndex((item) => typeof item === "boolean");
    const resultBiblio = biblio.findIndex((item) => typeof item === "boolean");
    for (let i = 0; i < array.length; i++)
      expect(biblio[i]).to.be.equal(array[i]);
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal(-1);
  });
});

const { expect } = require("chai");
const Biblio = require(".");

describe("Filter method", () => {
  const array = [1, 2, 3, 4, "a", "b", "c", "d", "e"];
  const biblio = new Biblio(1, 2, 3, 4, "a", "b", "c", "d", "e");

  it("Use filter passing each element of the array as a parameter of the callback function to be filtered by typeof operator", () => {
    const resultArray = array.filter((item) => typeof item === "number");
    const resultBiblio = biblio.filter((item) => typeof item === "number");
    for (let i = 0; i < array.length; i++)
      expect(biblio[i]).to.be.equal(array[i]);
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(4);
  });

  it("Use filter passing each element of the array as a parameter of the callback function to be filtered by typeof operator", () => {
    const resultArray = array.filter((item) => typeof item === "string");
    const resultBiblio = biblio.filter((item) => typeof item === "string");
    for (let i = 0; i < array.length; i++)
      expect(biblio[i]).to.be.equal(array[i]);
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(5);
  });
});

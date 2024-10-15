const { expect } = require("chai");
const Biblio = require(".");

describe("Find method", () => {
  const array = ["a", 20, "a", 40, -1];
  const biblio = new Biblio("a", 20, "a", 40, -1);

  it("Use find passing each element of the array as a parameter of the callback function to find an element > 30", () => {
    const resultArray = array.find((element) => element > 30);
    const resultBiblio = biblio.find((element) => element > 30);
    for (let i = 0; i < array.length; i++)
      expect(biblio[i]).to.be.equal(array[i]);
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal(40);
  });

  it("Use find passing each element of the array as a parameter of the callback function to search by typeof operator", () => {
    const resultArray = array.find((item) => typeof item === "number");
    const resultBiblio = biblio.find((item) => typeof item === "number");
    for (let i = 0; i < array.length; i++)
      expect(biblio[i]).to.be.equal(array[i]);
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal(20);
  });

  it("Use find passing each element of the array as a parameter of the callback function to search by typeof operator", () => {
    const resultArray = array.find((item) => typeof item !== "number");
    const resultBiblio = biblio.find((item) => typeof item !== "number");
    for (let i = 0; i < array.length; i++)
      expect(biblio[i]).to.be.equal(array[i]);
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal("a");
  });
});

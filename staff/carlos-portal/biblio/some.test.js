const { expect } = require("chai");
const Biblio = require(".");

describe("Some method", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const biblio = new Biblio(1, 2, 3, 4, 5, 6, 7, 8);
    it("Basic Usage",()=>{
        const resultArray = array.some((item) => typeof item === "string");
        const resultBiblio = biblio.some((item) => typeof item === "string");
        expect(resultBiblio).to.be.equal(resultArray).to.be.false;
        expect(biblio.length).to.be.equal(array.length).to.be.equal(8);
    })




})
const { expect } = require("chai");
const Biblio = require(".");

describe("Shift method", () => {
  const array = ["ant", "bison", "camel", "duck", "bison"];
  const biblio = new Biblio("ant", "bison", "camel", "duck", "bison");

  it("Use shift with resonable biblio instance", () => {
    const resultArray = array.shift();
    const resultBiblio = biblio.shift();
    expect(biblio).to.be.deep.equal(
      new Biblio("bison", "camel", "duck", "bison")
    );
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal("ant");
  });
});

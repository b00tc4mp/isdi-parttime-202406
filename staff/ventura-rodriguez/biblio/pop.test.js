const { expect } = require("chai");
const Biblio = require(".");

describe("Pop method", () => {
  const array = ["ant", "bison", "camel", "duck", "bison"];
  const biblio = new Biblio("ant", "bison", "camel", "duck", "bison");

  it("Use pop with resonable biblio instance", () => {
    const resultArray = array.pop();
    const resultBiblio = biblio.pop();
    expect(biblio).to.be.deep.equal(
      new Biblio("ant", "bison", "camel", "duck")
    );
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal("bison");
  });
});

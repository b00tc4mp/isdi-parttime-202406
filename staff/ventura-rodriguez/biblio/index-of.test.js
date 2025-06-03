const { expect } = require("chai");
const Biblio = require(".");

describe("IndexOf method", () => {
  const array = ["ant", "bison", "camel", "duck", "bison"];
  const biblio = new Biblio("ant", "bison", "camel", "duck", "bison");

  it("Use indexOf with searchElement parameter", () => {
    const resultArray = array.indexOf("bison");
    const resultBiblio = biblio.indexOf("bison");
    expect(biblio).to.be.deep.equal(
      new Biblio("ant", "bison", "camel", "duck", "bison")
    );
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal(1);
  });

  it("Use indexOf with searchElement and fromIndex parameters", () => {
    const resultArray = array.indexOf("bison", 2);
    const resultBiblio = biblio.indexOf("bison", 2);
    expect(biblio).to.be.deep.equal(
      new Biblio("ant", "bison", "camel", "duck", "bison")
    );
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal(4);
  });

  it("Use indexOf with searchElement parameter with not match value", () => {
    const resultArray = array.indexOf("giraffe");
    const resultBiblio = biblio.indexOf("giraffe");
    expect(biblio).to.be.deep.equal(
      new Biblio("ant", "bison", "camel", "duck", "bison")
    );
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal(-1);
  });
});

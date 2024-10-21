const { expect } = require("chai");
const Biblio = require(".");

describe("Slice method", () => {
  const array = ["ant", "bison", "camel", "duck", "bison"];
  const biblio = new Biblio("ant", "bison", "camel", "duck", "bison");

  it("Use slice with start parameter", () => {
    const resultArray = array.slice(2);
    const resultBiblio = biblio.slice(2);
    expect(biblio).to.be.deep.equal(
      new Biblio("ant", "bison", "camel", "duck", "bison")
    );
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(3);
  });

  it("Use slice with start and end parameters", () => {
    const resultArray = array.slice(2, 4);
    const resultBiblio = biblio.slice(2, 4);
    expect(biblio).to.be.deep.equal(
      new Biblio("ant", "bison", "camel", "duck", "bison")
    );
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(2);
  });

  it("Use slice with not positive value as start parameter", () => {
    const resultArray = array.slice(-2);
    const resultBiblio = biblio.slice(-2);
    expect(biblio).to.be.deep.equal(
      new Biblio("ant", "bison", "camel", "duck", "bison")
    );
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(2);
  });

  it("Use slice with not positive value as end parameter", () => {
    const resultArray = array.slice(2, -1);
    const resultBiblio = biblio.slice(2, -1);
    expect(biblio).to.be.deep.equal(
      new Biblio("ant", "bison", "camel", "duck", "bison")
    );
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(2);
  });
});

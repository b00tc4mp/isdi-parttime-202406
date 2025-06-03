const { expect } = require("chai");
const Biblio = require(".");

describe("Push method", () => {
  it("Use push with one parameter", () => {
    const array = ["ant", "bison", "camel", "duck", "bison"];
    const biblio = new Biblio("ant", "bison", "camel", "duck", "bison");
    const resultArray = array.push("snake");
    const resultBiblio = biblio.push("snake");
    expect(biblio).to.be.deep.equal(
      new Biblio("ant", "bison", "camel", "duck", "bison", "snake")
    );
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal(6);
  });

  it("Use push with multiple parameter", () => {
    const array = ["ant", "bison", "camel", "duck", "bison"];
    const biblio = new Biblio("ant", "bison", "camel", "duck", "bison");
    const resultArray = array.push("snake", "gorilla");
    const resultBiblio = biblio.push("snake", "gorilla");
    expect(biblio).to.be.deep.equal(
      new Biblio("ant", "bison", "camel", "duck", "bison", "snake", "gorilla")
    );
    expect(resultBiblio).to.be.equal(resultArray).to.be.equal(7);
  });
});

const { expect } = require("chai");
const Biblio = require(".");

describe("Push method", () => {
  it("Use push with one parameter", () => {
    const array = [1, 2, 3, 4, 5];
    const biblio = new Biblio(1, 2, 3, 4, 5);

    const resultArray = array.push(0);
    const resultBiblio = biblio.push(0);

    expect(biblio).to.be.deep.equal(new Biblio(1, 2, 3, 4, 5, 0));

    expect(resultBiblio).to.be.equal(resultArray).to.be.equal(6);
  });

  it("Use push with multiple parameters", () => {
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

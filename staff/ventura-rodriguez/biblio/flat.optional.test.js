const { expect } = require("chai");
const Biblio = require(".");

describe("Flat method", () => {
  it("Use flat without any parameter", () => {
    const array = [0, 1, 2, [3, 4]];
    const biblio = new Biblio(0, 1, 2, new Biblio(3, 4));
    const resultArray = array.flat();
    const resultBiblio = biblio.flat();
    expect(biblio.length).to.be.equal(array.length).to.be.equal(4);
    for (let i = 0; i < resultArray.length; i++)
      expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(5);
  });

  it("Use flat without any parameter and multiple biblio levels", () => {
    const array = [0, 1, [2, [3, [4, 5]]]];
    const biblio = new Biblio(
      0,
      1,
      new Biblio(2, new Biblio(3, new Biblio(4, 5)))
    );
    const resultArray = array.flat();
    const resultBiblio = biblio.flat();
    expect(biblio.length).to.be.equal(array.length).to.be.equal(3);
    expect(resultBiblio[0]).to.be.equal(0);
    expect(resultBiblio[1]).to.be.equal(1);
    expect(resultBiblio[2]).to.be.equal(2);
    expect(resultBiblio[3]).to.be.deep.equal(new Biblio(3, new Biblio(4, 5)));
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(4);
  });

  it("Use flat with depth parameter and multiple biblio levels", () => {
    const array = [0, 1, [2, [3, [4, 5]]]];
    const biblio = new Biblio(
      0,
      1,
      new Biblio(2, new Biblio(3, new Biblio(4, 5)))
    );
    const resultArray = array.flat(2);
    const resultBiblio = biblio.flat(2);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(3);
    expect(resultBiblio[0]).to.be.equal(0);
    expect(resultBiblio[1]).to.be.equal(1);
    expect(resultBiblio[2]).to.be.equal(2);
    expect(resultBiblio[3]).to.be.equal(3);
    expect(resultBiblio[4]).to.be.deep.equal(new Biblio(4, 5));
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(5);
  });

  it("Use flat with Infinity as depth value parameter and multiple biblio levels", () => {
    const array = [0, 1, [2, [3, [4, 5]]]];
    const biblio = new Biblio(
      0,
      1,
      new Biblio(2, new Biblio(3, new Biblio(4, 5)))
    );
    const resultArray = array.flat(Infinity);
    const resultBiblio = biblio.flat(Infinity);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(3);
    expect(resultBiblio[0]).to.be.equal(0);
    expect(resultBiblio[1]).to.be.equal(1);
    expect(resultBiblio[2]).to.be.equal(2);
    expect(resultBiblio[3]).to.be.equal(3);
    expect(resultBiblio[4]).to.be.equal(4);
    expect(resultBiblio[5]).to.be.equal(5);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(6);
  });
});

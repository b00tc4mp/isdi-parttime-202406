const { expect } = require("chai");
const Biblio = require(".");

describe("Constructor", function () {
  let biblioInstance;
  beforeEach(() => {
    biblioInstance = new Biblio(1, "two", true);
    console.log("hola");
  });

  it("should calculate the correct length of arguments", () => {
    expect(biblioInstance.length).to.equal(3);
  });

  it("should store each argument as an indexed property", () => {
    expect(biblioInstance[0]).to.equal(1);
    expect(biblioInstance[1]).to.equal("two");
    expect(biblioInstance[2]).to.equal(true);
  });

  beforeEach(() => {});

  it("should handle no arguments correctly", () => {
    const emptyBiblio = new Biblio();
    expect(emptyBiblio.length).to.equal(0);
  });

  it("should allow various data types as arguments", () => {
    const mixedBiblio = new Biblio(42, { key: "value" }, [1, 2, 3], null);
    expect(mixedBiblio.length).to.equal(4);
    expect(mixedBiblio[0]).to.equal(42);
    expect(mixedBiblio[1]).to.deep.equal({ key: "value" });
    expect(mixedBiblio[2]).to.deep.equal([1, 2, 3]);
    expect(mixedBiblio[3]).to.equal(null);
  });
});

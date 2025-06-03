const { expect } = require("chai");
const Biblio = require(".");

describe("Splice method", () => {
  it("Use splice passing al parameters with reasonable values", () => {
    const biblio = new Biblio("Jan", "March", "April", "June");
    const array = ["Jan", "March", "April", "June"];
    biblio.splice(1, 0, "Feb");
    array.splice(1, 0, "Feb");
    debugger;
    expect(biblio).to.be.deep.equal(
      new Biblio("Jan", "Feb", "March", "April", "June")
    );
    for (let i = 0; i < array.length; i++)
      expect(biblio[i]).to.be.equal(array[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(5);
  });
});

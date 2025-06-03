const { expect } = require("chai");
const Biblio = require(".");

describe("ForEach method", () => {
  it("Use forEach passing each element, index and biblio as a parameters of the callback function", () => {
    const biblio = new Biblio(1, 2, 3);
    const array = [1, 2, 3];
    biblio.forEach((element, index, biblio) => {
      expect(element).to.be.equal(array[index]);
      expect(biblio).to.be.deep.equal(new Biblio(1, 2, 3));
    });
    expect(biblio).to.be.deep.equal(new Biblio(1, 2, 3));
  });
});

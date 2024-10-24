const { assert } = require("chai");
const Biblio = require(".");

describe("Splice method", () => {
  it("Use splice passing al parameters with reasonable values", () => {
    const biblio = new Biblio("Jan", "March", "April", "June");
    const array = ["Jan", "March", "April", "June"];
    const resultBiblio = biblio.splice(1, 0, "Feb");
    const resultArray = array.splice(1, 0, "Feb");
    assert.deepEqual(
      resultArray,
      resultBiblio,
      "The splice method from Biblio does not work as the Array splice method."
    );
  });

  it("Use splice passing al parameters with reasonable values", () => {
    const biblio = new Biblio("Jan", "March", "April", "June");
    const array = ["Jan", "March", "April", "June"];
    const resultBiblio = biblio.splice(2, 1, "Feb");
    const resultArray = array.splice(2, 1, "Feb");
    assert.deepEqual(
      resultArray,
      resultBiblio,
      "The splice method from Biblio does not work as the Array splice method."
    );
  });
});

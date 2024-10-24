const { assert } = require("chai");
const Biblio = require(".");

describe("IndexOf method", () => {
  it("Use of IndexOf method returning value of a reasonable values", () => {
    const array1 = [1, 2, 3, 4, 5];
    const biblio1 = new Biblio(1, 2, 3, 4, 5);
    const resultarray1 = array1.indexOf(2, 0);
    const resultbiblio1 = biblio1.indexOf(2, 0);
    assert.equal(
      resultarray1,
      resultbiblio1,
      "The IndexOf method from Biblio does not work as the Array IndexOf method."
    );
  });
  it("Use of IndexOf method returning value of a reasonable values", () => {
    const array2 = ["Como", "estan", "los", "máquinas"];
    const biblio2 = new Biblio("Como", "estan", "los", "máquinas");
    const resultArray2 = array2.indexOf("máquinas", 2);
    const resultBiblio2 = biblio2.indexOf("máquinas", 2);
    assert.equal(
      resultArray2,
      resultBiblio2,
      "The IndexOf method from Biblio does not work as the Array IndexOf method."
    );
  });
  it("Use of IndexOf method returning value of a null index", () => {
    const array3 = ["lo", 3, "primero", 2, "todo"];
    const biblio3 = new Biblio("lo", 3, "primero", 2, "todo");
    const resultArray3 = array3.indexOf(2, -1);
    const resultBiblio3 = biblio3.indexOf(2, -1);
    assert.equal(
      resultArray3,
      resultBiblio3,
      "The IndexOf method from Biblio does not work as the Array IndexOf method."
    );
  });
});

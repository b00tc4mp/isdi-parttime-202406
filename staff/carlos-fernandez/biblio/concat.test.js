const { assert } = require("chai");
const Biblio = require(".");

describe("Concat method", () => {
  it("Use of concat method returning two concatenated arrays ", () => {
    const array1 = ["Willyrex", " sácate"];
    const array2 = ["una ", "M.O.A.B."];
    const biblio1 = new Biblio(array1, array2);
    const result1 = array1.concat(array2);
    const resultBiblio1 = biblio1.concat(array1, array2);
    assert.deepEqual(
      result1,
      resultBiblio1,
      "The concat method from Biblio does not work as the Array concat method."
    );

    const array5 = ["Walter ", "White "];
    const array6 = [" Saul", "Goodman"];
    const biblio3 = new Biblio(array5, array6);
    const result3 = array5.concat(array6);
    const resultBiblio3 = biblio3.concat(array5, array6);
    assert.deepEqual(
      result3,
      resultBiblio3,
      "The concat method from Biblio does not work as the Array concat method."
    );
  });
  it("Use of concat method with an undefined array.", () => {
    const array3 = ["Damon ", "Salvatore"];
    const array4 = ["cárgate ", "a ", "Matt"];
    const biblio2 = new Biblio(array3, array4);
    const result2 = array3.concat();
    const resultBiblio2 = biblio2.concat(array3);
    assert.deepEqual(
      result2,
      resultBiblio2,
      "The concat method from Biblio does not work as the Array concat method."
    );
  });
});

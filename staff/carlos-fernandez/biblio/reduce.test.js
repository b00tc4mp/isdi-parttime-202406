const { assert } = require("chai");
const Biblio = require(".");

describe("reduce method", () => {
  it("Use of reduce method returning value of a reasonable values", () => {
    const array1 = [1, 2, 3, 4, 5];
    const biblio1 = new Biblio(1, 2, 3, 4, 5);
    const resultarray1 = array1.reduce((acc, curr) => acc + curr, 0);
    const resultbiblio1 = biblio1.reduce((acc, curr) => acc + curr, 0);
    assert.equal(
      resultarray1,
      resultbiblio1,
      "The reduce method from Biblio does not work as the Array at method."
    );
  });

  it("Use of reduce method returning value of a reasonable values", () => {
    const array2 = ["Hola", " ", "mundo", "!"];
    const biblio2 = new Biblio("Hola", " ", "mundo", "!");
    const resultArray2 = array2.reduce((acc, curr) => acc + curr, "");
    const resultBiblio2 = biblio2.reduce((acc, curr) => acc + curr, "");
    assert.equal(
      resultArray2,
      resultBiblio2,
      "The at method from Biblio does not work as the Array at method."
    );
  });

  it("Use of reduce method returning value of a null index", () => {
    const array3 = [{ age: 10 }, { age: 20 }, { age: 30 }];
    const biblio3 = new Biblio({ age: 10 }, { age: 20 }, { age: 30 });
    const resultArray3 = array3.reduce((acc, curr) => acc + curr.age, 0);
    const resultBiblio3 = biblio3.reduce((acc, curr) => acc + curr.age, 0);
    assert.equal(
      resultArray3,
      resultBiblio3,
      "The at method from Biblio does not work as the Array at method."
    );
  });
});

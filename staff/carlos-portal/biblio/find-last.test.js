const { assert } = require("chai");
const Biblio = require(".");

describe("find-last method", () => {
  it("Use of find-last method using regular values.", () => {
    const arr1 = [1, 2, 3, 4, 5, 6];
    const result1 = arr1.findLast((element) => element > 4);
    const biblio1 = new Biblio(1, 2, 3, 4, 5, 6);
    const resultBiblio1 = biblio1.findLast((element) => element > 4);
    assert.equal(
      resultBiblio1,
      result1,
      "The find-last method from Biblio does not work as the Array find-last method."
    );
  });
  it("Use of find-last method using typeof tests.", () => {
    const arr1 = ["a", 20, "a", 40, -1];
    const result1 = arr1.findLast((element) => typeof element !== "number");
    const biblio1 = new Biblio("a", 20, "a", 40, -1);
    const resultBiblio1 = biblio1.findLast(
      (element) => typeof element !== "number"
    );
    assert.equal(
      resultBiblio1,
      result1,
      "The find-last method from Biblio does not work as the Array find-last method."
    );
  });
});

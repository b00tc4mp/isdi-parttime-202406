const { assert } = require("chai");
const Biblio = require(".");

describe("Filter method", () => {
  it("Use a filter method returning only numbers", () => {
    const array1 = [1, 2, "g", 4, "j"];
    const biblio1 = new Biblio(1, 2, "g", 4, "j");

    const resultArray1 = array1.filter((item) => typeof item === "number");
    const resultBiblio1 = biblio1.filter((item) => typeof item === "number");

    const resultBiblioAsArray = Array.from(resultBiblio1);

    assert.deepEqual(
      resultArray1,
      resultBiblioAsArray,
      "The filter method from Biblio does not work as the Array filter method."
    );
  });
  it("Use a filter method returning only stgrings", () => {
    const array2 = ["Alboroto", 10, 2, "l"];
    const biblio2 = new Biblio("Alboroto", 10, 2, "l");

    const resultArray2 = array2.filter((item) => typeof item === "string");
    const resultBiblio2 = biblio2.filter((item) => typeof item === "string");

   
    const resultBiblioAsArray = Array.from(resultBiblio2);

    assert.deepEqual(
      resultArray2,
      resultBiblioAsArray,
      "The filter method from Biblio does not work as the Array filter method."
    );
  });
});

const { expect } = require("chai");
const Biblio = require(".");

describe("Splice method", () => {

  it("Use splice method with positive value for start and negative for deleteCount", () => {
    const array = [1, 2, 3, 4, 5];
    const biblio = new Biblio(1, 2, 3, 4, 5);
    const resultArray = array.splice(-2, 4, 'a', 'b');
    const resultBiblio = biblio.splice(-2, 4, 'a', 'b');
    for (let i = 0; i < array.length; i++)
        expect(biblio[i]).to.be.equal(array[i]);    
    for (let i = 0; i < resultArray.length; i++)
            expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(5);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(2);
  });

  it("Use splice method with positive values for start and deleteCount", () => {
    const array = [1, 2, 3, 4, 5];
    const biblio = new Biblio(1, 2, 3, 4, 5);
    const resultArray = array.splice(2, 2, 'a', 'b');
    const resultBiblio = biblio.splice(2, 2, 'a', 'b');
    for (let i = 0; i < array.length; i++)
        expect(biblio[i]).to.be.equal(array[i]);    
    for (let i = 0; i < resultArray.length; i++)
            expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(5);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(2);
  });

  it("Use splice method with positive value for start and 0 for deleteCount", () => {
    const array = [1, 2, 3, 4, 5];
    const biblio = new Biblio(1, 2, 3, 4, 5);
    const resultArray = array.splice(5, 0, 'a', 'b');
    const resultBiblio = biblio.splice(5, 0, 'a', 'b');
    for (let i = 0; i < array.length; i++)
        expect(biblio[i]).to.be.equal(array[i]);    
    for (let i = 0; i < resultArray.length; i++)
            expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(7);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(0);
  });

  it("Use splice method with 0 for start and a greater value than length for deleteCount", () => {
    const array = [1, 2, 3, 4, 5];
    const biblio = new Biblio(1, 2, 3, 4, 5);
    const resultArray = array.splice(0, 10, 'a', 'b');
    const resultBiblio = biblio.splice(0, 10, 'a', 'b');
    for (let i = 0; i < array.length; i++)
        expect(biblio[i]).to.be.equal(array[i]);    
    for (let i = 0; i < resultArray.length; i++)
            expect(resultBiblio[i]).to.be.equal(resultArray[i]);
    expect(biblio.length).to.be.equal(array.length).to.be.equal(2);
    expect(resultBiblio.length).to.be.equal(resultArray.length).to.be.equal(5);
  });

});

const {expect} = require("chai")
const Biblio = require("./constructor")
const shift = require("./shift")

describe("Prototype method", ()=>{
    it("Basic usage",()=>{
    const array = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1]
    const result = array.shift()
    expect(result).to.equal(1)
    expect(array).to.deep.equal([2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1])

    });
    it("It should work w one element ", () => {
        const arr = [1];
        const result = array.shift();
        expect(result).to.equal(1); 
        expect(arr).to.deep.equal([]); 
      });
    });






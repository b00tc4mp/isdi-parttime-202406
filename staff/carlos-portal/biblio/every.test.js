const {assert} = require("chai")
const Biblio = require(".")

describe("Every Method", ()=> {
    it("Using of every method",()=>{
    const array = [1,2,3,4,5,6,7,8,9]
    const biblioArray = [1,2,3,4,5,6,7,8,9]
    const result1 = array.every((value) => value<10);
    const biblio1 = new Biblio(...biblioArray);
    const resultBiblio1 = biblio1.every((currentValue) => currentValue < 40)

    assert.equal(result1,resultBiblio1,"The Method from Biblio does not work as eht regular one ")});
    })
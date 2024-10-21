const {expect} = require("chai")
const Biblio = require(".")


describe ("Pop Method", () => {
    const array = [1,2,3,4,5,6,7,8];
    const biblio = new Biblio(1,2,3,4,5,6,7,8);
    const array1= []
    const biblio1 = []

    it("Use Pop Method returning the element deleted and altering the basic array", () =>{
        const resultBiblio = biblio.pop();
        const resultArray = array.pop();
        expect(resultBiblio).to.be.equal(resultArray);


    }),

    it("Use it when no values ", () => {
        const resultBiblio1 = biblio1.pop() 
        const resultarray1 = array1.pop()
        expect(resultBiblio1).to.be.equal(resultarray1)
    })

});
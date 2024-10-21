const {assert, expect} = require ("chai")
const Biblio = require(".")

describe ("Testing the fill method ",()=>{
    it("Basic Usage",()=>{
        const array = [1,2,3,4,5,6,7]
        const value = 5
        const biblio = new Biblio(1,2,3,4,5,6,7)
        const resultArray = array.fill(0,1,2);
        const resultBiblio = biblio.fill(0,1,2);
        for (let i = 0; i < resultArray.length; i++) {
            expect(resultArray[i]).to.be.equal(resultBiblio[i])
            expect(biblio).to.be.deep.equal(resultBiblio)

            
        }
        



    })








})
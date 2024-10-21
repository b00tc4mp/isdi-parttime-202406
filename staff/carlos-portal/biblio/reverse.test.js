const {expect} = require("chai")


describe("Testing reverse method", ()=>{


it("reversing the array",() =>{
    const arr = [1,2,3,4,5,6,7]
    const ans = [7,6,5,4,3,2,1]
    const result = arr.reverse()
    expect(result).to.deep.equal(ans)

});


it("1 element",() =>{
    const arr = [1]
    const ans = [1]
    const result = arr.reverse()
    expect(result).to.deep.equal(ans)

});
it("0 elements",() =>{
    const arr = []
    const result = arr.reverse()
    expect(result).to.deep.equal([])

})

}



)
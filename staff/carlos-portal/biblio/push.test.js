const {expect} = require("chai")

describe("Testing del Push ", () => {
  
    it("debería agregar un solo elemento al final del array y devolver la nueva longitud", () => {
      let arr = [1, 2, 3];
      let result = arr.customPush(4);
      
      expect(result).to.equal(4); // La longitud del array debería ser 4
      expect(arr).to.deep.equal([1, 2, 3, 4]); // El array debería ser [1, 2, 3, 4]
    });
    
    it("debería agregar varios elementos al final del array y devolver la nueva longitud", () => {
      let arr = [1, 2, 3];
      let result = arr.customPush(4, 5, 6);
      
      expect(result).to.equal(6); // La longitud del array debería ser 6
      expect(arr).to.deep.equal([1, 2, 3, 4, 5, 6]); // El array debería ser [1, 2, 3, 4, 5, 6]
    });
    
    it("debería devolver la longitud original si no se agregan elementos", () => {
      let arr = [1, 2, 3];
      let result = arr.customPush();
      
      expect(result).to.equal(3); // La longitud no debería cambiar
      expect(arr).to.deep.equal([1, 2, 3]); // El array debería seguir igual
    });

})
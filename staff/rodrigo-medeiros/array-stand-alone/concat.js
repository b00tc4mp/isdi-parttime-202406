// crear una funcion para replicar el metodo de array concat
// el metodo pretende unir dos o más arrays en uno solo array con todos los elementos
debugger
    function concatArrays (...args) {
        let newArray = []
        for (let i = 0; i < args.length; i++) {
            for (let j = 0; j < args[i].length; j++) {
                newArray.push(args[i][j]);
            }
        }   
    
        return newArray;
    } 
    
function arrayIsEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let result = true;
  let i = 0;
  while (i < arr1.length || result === false) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
    i++;
  }
  return result;
}
// Teste1

const array1 = ['uno', 'dos']
const array2 = ['tres', 'cuatro']
let r1 = array1.concat(array2);
let r2 = concatArrays(array1, array2)
arrayIsEqual(r1, r2);
//expected output is true!!
    

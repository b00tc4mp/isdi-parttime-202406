// crear una función para replicar el metodo at[] de arrays

debugger
function arrayAt (array, position) {
    let findArray = []; 
    //cumplindo condiciones del metodo
    if (position === Number) 
    if (position >= array.length) return undefined
    if (position < -array.length) return undefined

    // buscando arrays en la posicion position si este es positivo

    if (position >= 0) {
        return array[position];
    }
    if (position < 0) {
        return array[array.length + position]
    }

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
    //teste1 
    const arrayTest1 = ['apple', 'manzana', 'pera']
    const result1 = arrayAt(arrayTest1, 2)
    const result2 = arrayTest1.at(2)
    console.log(arrayIsEqual(result1, result2))
    //expected output 'true'

    //teste2
    
    const result3 = arrayAt(arrayTest1, -1)
    const result4 = arrayTest1.at(-1)
    console.log(arrayIsEqual(result3, result4));
    //expected output 'true'!
   
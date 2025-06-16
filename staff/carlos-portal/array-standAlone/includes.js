function includes ( array,value){
   for (const element of array) {
    if (element === value){return true}
    
   }
   return false
}

// Pruebas
const array1 = [1, 2, 3, 4, 5];
console.assert(includes(array1, 3) === true, {
    result: includes(array1, 3),
    message: "Test 1 Fallido:"
});


console.assert(includes(array1, 6) === false, {
    result: includes(array1, 6),
    message: "Test 2 Fallido:"
});


const array2 = ['a', 'b', 'c'];
console.assert(includes(array2, 'b') === true, {
    result: includes(array2, 'b'),
    message: "Test 3 Fallido:"
});


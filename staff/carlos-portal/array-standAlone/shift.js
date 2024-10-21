function shift(array) {
    if (array.length === 0) {
        return undefined; 
    }
    const firstElement = array[0]; 
    for (let i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }
    array.length = array.length - 1;
    return firstElement;
}

const array1 = [1, 2, 3, 4];
const primero1 = primero(array1);
console.assert(primero1 === 1, {
    result: primero1,
    message: "Test 1: No pasado"
});


//
const array2 = ['a'];
const primero2 = primero(array2);
console.assert(primero2 === 'a', {
    result: primero2,
    message: "Test 2:No pasado"
});

const array3 = [];
const primero3 = primero(array3);
console.assert(primero3 === undefined, {
    result: primero3,
    message: "Test 3: No pasado"})
function pushArray(array, ...arguments) {
    for (let i = 0; i < arguments.length; i++) {
        array[array.length] = arguments[i];
    }
    
}

// Pruebas
const array1 = [1, 2, 3];
const newLength1 = pushArray(array1, 4, 5);
console.assert(newLength1 === 5, {
    result: newLength1,
    message: "Test 1 No pasado",
});
console.assert(array1.length === 5 && array1[3] === 4 && array1[4] === 5, {
    result: array1,
    message: "Test 1 No pasado ",
});

const array2 = ['a', 'b'];
const newLength2 = pushArray(array2, 'c', 'd', 'e');
console.assert(newLength2 === 5, {
    result: newLength2,
    message: "Test 2 No pasado",
});
console.assert(array2.length === 5 && array2[2] === 'c' && array2[3] === 'd' && array2[4] === 'e', {
    result: array2,
    message: "Test 2 No pasado",
});

const array3 = [];
const newLength3 = pushArray(array3, 1);
console.assert(newLength3 === 1, {
    result: newLength3,
    message: "Test 3 No pasado",
});
console.assert(array3.length === 1 && array3[0] === 1, {
    result: array3,
    message: "Test 3 No pasado",
});

const array4 = [10, 20];
const newLength4 = pushArray(array4, 30);
console.assert(newLength4 === 3, {
    result: newLength4,
    message: "Test 4 No pasado",
});
console.assert(array4.length === 3 && array4[2] === 30, {
    result: array4,
    message: "Test 4 No pasado ",
});
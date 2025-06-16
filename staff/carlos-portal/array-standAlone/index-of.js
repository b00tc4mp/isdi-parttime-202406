function indexOf(array, fromIndex = 0, element) {
    if (fromIndex < 0) {
        fromIndex = 0; 
    }

    for (let i = fromIndex; i < array.length; i++) {
        if (array[i] === element) {
            return i
    }

    return -1
}
}

// Pruebas
const array1 = [1, 2, 3, 4, 5];
console.assert(indexOf(array1, 0, 3) === 2, {
    result: indexOf(array1, 0, 3),
    message: "Test 1 Fallido: "
});


console.assert(indexOf(array1, 2, 4) === 3, {
    result: indexOf(array1, 2, 4),
    message: "Test 2 Fallido:"
});


console.assert(indexOf(array1, 3, 2) === -1, {
    result: indexOf(array1, 3, 2),
    message: "Test 3 Fallido:"
});


console.assert(indexOf(array1, -1, 5) === 4, {
    result: indexOf(array1, -1, 5),
    message: "Test 4 Fallido:"
});

console.assert(indexOf(array1, 5, 1) === -1, {
    result: indexOf(array1, 5, 1),
    message: "Test 5 Fallido:"
});



// ejeccuta una función reductora sobre cada elemento del array pasado
// devuelve como resultado un único valor
// reduce(callback)
// reduce(callback, initialValue)

function reduce(array, callbackFN, initialValue =0) {
    if (!(array instanceof Array)) return undefined;

    let accumulator = initialValue;

    for (let i = 0; i < array.length; i++) {
        accumulator = callbackFN(accumulator, array[i]);
    }

    return accumulator;
}

// tdd

const noArray = "foo";
const result1 = reduce(
    noArray,
    (accumulator, currentValue) => accumulator + currentValue
); 
console.assert(result1 == undefined, {
    result: result1,
    message: "Test 1 No Pasado",
});

const array2 = [1,2,3,4];
const result2 = reduce (
    array2,
    (accumulator, currentValue) => accumulator + currentValue,
    2
);
const reduceResult2 = array2.reduce((accumulator, currentValue) => accumulator + currentValue,
2);
console.assert(result2 === reduceResult2, {
    result: result2,
    message: "Test 2 No pasado",
});
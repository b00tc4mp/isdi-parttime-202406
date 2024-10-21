function includes(array, value, fromIndex = 0) {
    
    // This method determines whether an array includes a certain value among its entries, 
    // returning true or false as appropriate.

    if (!(array instanceof Array)) {
        throw new TypeError('The provided value is not an array')
    }

    let included = false

    // check fromIndex value

    if (fromIndex >= array.length) return included

    // negative cases 
    if (fromIndex < 0) fromIndex += array.length

    // when fromIndex < -array.length
    fromIndex = Math.max(fromIndex, 0)

    for (let i = fromIndex; i < array.length; i++) {
        if (array[i] === value) return true
    }

    return included
}



const array1 = [1, 2, 3, 4, 5, 6, 7, 8] 
const result1 = includes(array1, 8)
console.assert(result1 === array1.includes(8), {
    result: result1,
    message: "Test 1 no pasado",
});

const result2 = includes(array1, null)
console.assert(result2 === array1.includes(null), {
    result: result2,
    message: "Test 2 no pasado",
});

const result3 = includes(array1, 2, 2)
console.assert(result3 === array1.includes(2, 2), {
    result: result3,
    message: "Test 3 no pasado",
});

const array2 = [true, false, true, false, false, false]
const result4 = includes(array2, false, 2)
console.assert(result4 === array2.includes(false, 2), {
    result: result4,
    message: "Test 4 no pasado",
});

const result5 = includes(array2, undefined)
console.assert(result5 === array2.includes(undefined), {
    result: result5,
    message: "Test 5 no pasado",
});


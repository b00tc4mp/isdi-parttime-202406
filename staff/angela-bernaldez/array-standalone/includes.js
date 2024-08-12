function includes(array, value, fromIndex = 0) {
    // This method determines whether an array includes a certain value among its entries, 
    // returning true or false as appropriate.

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


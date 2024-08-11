function every(array, callback) {

    // tests whether all elements in the array pass the test implemented by the provided function
    // returns a boolean
    // true if all element pass the test
    // false otherwise (if at least one element does not pass the test)

    if (typeof callback !== 'function') {
        throw TypeError('Second argument of map needs to be a function');
    }

    let result = true

    for (let i = 0; i < array.length; i++) {
        if (! callback(array[i])) return false 
    }

    return result
}




const array1 = [1, 2, 3, 4, 5, 6, 7, 8]
const isPositive = (currentValue) => currentValue >= 0
const result1 = every(array1, isPositive)

console.assert(result1 === array1.every(isPositive), {
result: result1,
message: "Test 1 no pasado",
});

const isNegative = (currentValue) => currentValue < 0;
const result2 = every(array1, isNegative)
console.assert(result2 === array1.every(isNegative), {
result: result2,
message: "Test 2 no pasado",
});

const isEven = (currentValue) => currentValue % 2 === 0 
const result3 = every(array1, isEven)
console.assert(result3 === array1.every(isEven), {
result: result3,
message: "Test 3 no pasado",
});

const isNumber = (currentValue) => typeof currentValue === 'number'
const result4 = every(array1, isNumber)
console.assert(result4 === array1.every(isNumber), {
result: result4,
message: "Test 4 no pasado",
});

const isBoolean = (currentValue) => typeof currentValue === 'boolean'
const result5 = every(array1, isBoolean)
console.assert(result5 === array1.every(isBoolean), {
result: result5,
message: "Test 5 no pasado",
});


function fill(array, value, start = 0, end = array.length) {

    // The fill() method of Array instances changes all elements 
    // within a range of indices in an array to a static value. It returns the modified array.

    let newArray = []

    for (let i = start; i < end; i++) {
        newArray[newArray.length] = value
    }

    return newArray 
}



const array1 = [1, 2, 3, 4, 5, 6];
const result1 = fill(array1, 0);
console.assert(JSON.stringify(result1) === JSON.stringify(array1.fill(0)), {
    result: result1,
    message: "Test 1 no pasado",
});
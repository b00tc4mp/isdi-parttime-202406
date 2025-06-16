function forEach(array,callback) {
    for (const element of array) {
        callback(element)
        
    }
    return array
}

const mult = (value) => value*6

const array1 = [0,1,2,3,4,5,6,7,8,9,10]
const array2 = [2,4,6,8,10,12,14,16,18]
const array3 = []

const result1 = forEach(array1,mult);
console.assert(result1 === array1.forEach(mult),{
  result: result1,
  message: "Test 1 no pasado",
});
const result2 = forEach(array2,mult);
console.assert(result2 === array2.forEach(mult),{
  result: result2,
  message: "Test 2 no pasado",
});
const result3 = forEach(array3,);
console.assert(result3=== array3.forEach(mult),{
  result: result3,
  message: "Test 3 no pasado",
});

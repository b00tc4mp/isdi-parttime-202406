function at(array, index) {

    if (index == null) index = 0

    if (typeof index === 'boolean') index = Number(index)

    if (index < - array.length || index >= array.length) return undefined

    if (index < 0) index += array.length

    return array[index]
}



const array1 = [1, 2, 3, 4, 5, 6];
const result1 = at(array1, 1);
console.assert(result1 === array1.at(1), {
    result: result1,
    message: "Test 1 no pasado",
});

const result2 = at(array1, -2);
console.assert(result2 === array1.at(-2), {
    result: result2,
    message: "Test 2 no pasado",
});

const result3 = at(array1, 10);
console.assert(result3 === array1.at(10), {
    result: result3,
    message: "Test 3 no pasado",
});

const result4 = at(array1, -10);
console.assert(result4 === array1.at(-10), {
    result: result4,
    message: "Test 4 no pasado",
});

const result5 = at(array1, null);
console.assert(result5 === array1.at(null), {
    result: result5,
    message: "Test 5 no pasado",
});

const result6 = at(array1, undefined);
console.assert(result6 === array1.at(null), {
    result: result6,
    message: "Test 6 no pasado",
});

const result7 = at(array1, true);
console.assert(result7 === array1.at(true), {
    result: result7,
    message: "Test 7 no pasado",
});

const result8 = at(array1, false);
console.assert(result8 === array1.at(false), {
    result: result8,
    message: "Test 8 no pasado",
});



function isEven(num) {
    return num % 2 === 0;
}
function filter(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

const array1 = [1, 2, 3, 4, 5, 6];
const evenNumbers = filter(array1, isEven);
console.log(evenNumbers); // [2, 4, 6]

const array2 = [10, 15, 20, 25, 30];
const result = filter(array2, isEven);
console.log(result); // [10, 20, 30]

// Caso con un array vacío
const emptyArray = [];
const resultEmpty = filter(emptyArray, isEven);
console.log(resultEmpty); // []

// Caso con ningún elemento que pase el filtro
const noEvenNumbers = filter([1, 3, 5, 7], isEven);
console.log(noEvenNumbers); // []

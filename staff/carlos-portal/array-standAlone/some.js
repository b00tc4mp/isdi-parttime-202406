function algunos(array, callback) {
    let found = false;
    let i = 0;
    
    while (i < array.length) {
        if (callback(array[i]) === true) {
            found = true;
            return found; 
        }
        i++;
    }
    return found;
}

function callback(value) {
  
    return value % 2 === 0;
}

// Pruebas

const array1 = [1, 3, 5, 4];
const result1 = algunos(array1, callback);
console.assert(result1 === true, "Test 1 fallido");

const array2 = [1, 3, 5, 7];
const result2 = algunos(array2, callback);
console.assert(result2 === false, "Test 2 fallido");

const array3 = [];
const result3 = algunos(array3, callback);
console.assert(result3 === false, "Test 3 fallido");


const array4 = [2];
const result4 = algunos(array4, callback);
console.assert(result4 === true, "Test 4 fallido");


const array5 = [1];
const result5 = algunos(array5, callback);
console.assert(result5 === false, "Test 5 fallido");

function concat(...arrays) {
    let newArray = [];

    for (let i = 0; i < arrays.length; i++) {
        if (typeof arrays[i] === 'object' && arrays[i] !== null) {
            if (arrays[i] instanceof Array) {
                // Si es un array, agregar sus elementos uno a uno recorriendolo
                for (let j = 0; j < arrays[i].length; j++) {
                    newArray[newArray.length] = arrays[i][j];
                }
            } else {
                // Si es un objeto, agregar el objeto entero (no sus propiedades)
                newArray[newArray.length] = arrays[i];
            }
        } else {
            // Agregar elementos primitivos directamente
            newArray[newArray.length] = arrays[i];
        }
    }
    return newArray;
}



function arrayIsEqual(arr1, arr2) {
    if (typeof arr1 !== 'object' || typeof arr2 !== 'object') {
        throw TypeError('Both input parameters need to be arrays')
    }
    if (arr1.length !== arr2.length) return false;
    let result = true;
    let i = 0;
    while (i < arr1.length) {
      if (arr1[i] !== arr2[i]) {
          return false;
      }
      i++;
    }
    return result;
}



const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [-1, -2, -3, -4, -5, -6];
const result1 = concat(array1, array2);
console.assert(arrayIsEqual(result1, array1.concat(array2)), {
    result: result1,
    message: "Test 1 no pasado",
});

const array3 = ["apple", "banana"];
const array4 = ["orange", "watermelon"];
const array5 = ["grapes"];
const result2 = concat(array3, array4, array5);
console.assert(arrayIsEqual(result2, array3.concat(array4, array5)), {
    result: result2,
    message: "Test 2 no pasado",
});

const result4 = concat(array3, array4, null, undefined);
console.assert(arrayIsEqual(result4, array3.concat(array4, null, undefined)), {
    result: result4,
    message: "Test 4 no pasado",
});

const result5 = concat(array3, array4, true, false);
console.assert(arrayIsEqual(result5, array3.concat(array4, true, false)), {
    result: result5,
    message: "Test 5 no pasado",
});

const result6 = concat(array3, array4, {'fruit': 'raspeberries'});
console.assert(
    JSON.stringify(result6) === JSON.stringify(array3.concat(array4, {'fruit': 'raspeberries'})), 
    {
        result: result6,
        message: "Test 6 no pasado",
    }
);

const result7 = concat(array3);
console.assert(arrayIsEqual(result7, array3.concat()), {
    result: result7,
    message: "Test 7 no pasado",
});
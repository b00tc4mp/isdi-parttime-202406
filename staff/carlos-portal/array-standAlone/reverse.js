//Al revés
function esrever(array) {
    let invertido = new Array(array.length);
    for (let i = 0; i < array.length; i++) {
        invertido[i] = array[array.length - 1 - i]; 
    }
    return invertido;
}




const array1 = [1, 2, 3, 4];
const reversed1 =  esrever(array1);
console.assert(reversed1.length === 4, "Test 1:");
console.assert(reversed1[0] === 4, "Test 1:");
console.assert(reversed1[1] === 3, "Test 1:");
console.assert(reversed1[2] === 2, "Test 1:");
console.assert(reversed1[3] === 1, "Test 1:");

// Test 2
const array2 = ['a', 'b', 'c'];
const reversed2 =  esrever(array2);
console.assert(reversed2.length === 3, "Test 2:");
console.assert(reversed2[0] === 'c', "Test 2:");
console.assert(reversed2[1] === 'b', "Test 2:");
console.assert(reversed2[2] === 'a', "Test 2:");

// Test 3
const array3 = [];
const reversed3 =  esrever(array3);
console.assert(reversed3.length === 0, "Test 3:  ");
console.assert(reversed3.length === array3.length, "Test 3: Array vacío no devuelve array vacío");

// Test 4
const array4 = [1];
const reversed4 =  esrever(array4);
console.assert(reversed4.length === 1, "Test 4:");
console.assert(reversed4[0] === 1, "Test 4:");

console.log("Todos los tests han pasado");
function slice(array, starter, finisher) {
    if (starter === null || starter === undefined) {
        starter = 0;
    }
    if (finisher === null || finisher === undefined) {
        finisher = array.length;
    }

    let resultado = [];

    for (let i = 0; i < (finisher - starter); i++) {
        resultado.push(array[starter + i]);
    }

    return resultado;
}

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const result1 = slice(animals, 2);
console.assert(result1.length === 3, "Test 1:");
console.assert(result1[0] === 'camel', "Test 1: ");
console.assert(result1[1] === 'duck', "Test 1: ");
console.assert(result1[2] === 'elephant', "Test 1: ");

// Test 2
const result2 = slice(animals, 1, 4);
console.assert(result2.length === 3, "Test 2:  ");
console.assert(result2[0] === 'bison', "Test 2:    ");
console.assert(result2[1] === 'camel', "Test 2:  ");
console.assert(result2[2] === 'duck', "Test 2: ");

// Test 3
const result3 = slice(animals, null, 3);
console.assert(result3.length === 3, "Test 3:  ");
console.assert(result3[0] === 'ant', "Test 3:    ");
console.assert(result3[1] === 'bison', "Test 3:  ");
console.assert(result3[2] === 'camel', "Test 3: ");

// Test 4
const result4 = slice(animals, 2, undefined);
console.assert(result4.length === 3, "Test 4: ");
console.assert(result4[0] === 'camel', "Test 4:    ");
console.assert(result4[1] === 'duck', "Test 4:  ");
console.assert(result4[2] === 'elephant', "Test 4: ");

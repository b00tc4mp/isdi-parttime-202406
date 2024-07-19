// 1. Crea una función que devuelva true o false si el número
// pasado por parámetro es par o impar. Crea los test correspondientes.


function isEven(value) {
    var result
    if (typeof value !== 'number' && typeof value !== 'string') {
        result = false;
    }
    else if (typeof value === 'number') {
        if (value % 2 == 0) {
            result = true;
        }
        else {
            result = false;
        };
    }
    else if (typeof value === 'string') {
        let i = value.length
        if (i % 2 == 0) {
            result = true;
        }
        else {
            result = false;
        };
    }
    else if (value > Number.MAX_SAFE_INTEGER) { // I am having trouble making this one work
        result = false;

    }

    return result;

}

const result1 = isEven(1)
isEven(1);
console.assert(result1 === false, { result: result1, message: 'Test 1 no pasado' })

const result2 = isEven(2)
console.assert(result2 === true, { result: result2, message: 'Test 2 ha pasado' })

const result3 = isEven(0)
console.assert(result3 === true, { result: result3, message: 'Test 3 no pasado' })

const result4 = isEven('hola')
console.assert(result4 === true, { result: result4, message: 'Test 4 no pasado' })

const result5 = isEven('adios')
console.assert(result5 === false, { result: result5, message: 'Test 5 no pasado' })

const result6 = isEven(Number.MAX_SAFE_INTEGER)
console.assert(result6 === false, { result: result6, message: 'Test 6 no pasado' })

const result7 = isEven(Number.MAX_SAFE_INTEGER + 1)
console.assert(result7 === true, { result: result7, message: 'Test 7 no pasado' })






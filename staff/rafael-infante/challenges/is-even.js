// 1. Crea una función que devuelva true o false si el número
// pasado por parámetro es par o impar. Crea los test correspondientes.

debugger

function isEven(value) {

    if (typeof value === 'number'){
        
        return value % 2 === 0;
        
    } else if (typeof value === 'string') {
        
        let countLetters = 0;
        for(let i = 0; i < value.length; i++){
            if (value[i] !== ' ') {
                countLetters += 1
            }
        }
        return countLetters % 2 === 0;
        
    } else {
        return `El tipo de dato: ${value} no es válido`
    }
}


let result1 = isEven(1)
console.assert(result1 === false, {result: result1, message: 'Test 1 no pasado'})

let result2 = isEven(2)
console.assert(result2 === true, {result: result2, message: 'Test 2 no pasado'})

let result3 = isEven(0)
console.assert(result3 === true, {result: result3, message: 'Test 3 no pasado'})

let result4 = isEven('hola')
console.assert(result4 === true, {result: result4, message: 'Test 4 no pasado'})

let result5 = isEven('adios')
console.assert(result5 === false, {result: result5, message: 'Test 5 no pasado'})

let result6 = isEven(Number.MAX_SAFE_INTEGER)
console.assert(result6 === false, {result: result6, message: 'Test 6 no pasado'})

let result7 = isEven(Number.MAX_SAFE_INTEGER + 1)
console.assert(result7 === true, {result: result7, message: 'Test 7 no pasado'})

let result8 = isEven(' ho la ')
console.assert(result8 === true, {result: result8, message: 'Test 8 no pasado'})

let result9 = isEven(' ho laa ')
console.assert(result9 === false, {result: result9, message: 'Test 9 no pasado'})

let result10 = isEven([1,2])
console.assert(typeof result10 !== 'boolean', {result: result10, message: 'Test 10 no pasado'})

// 1. Crea una función que devuelva true o false si el número
// pasado por parámetro es par o impar. Crea los test correspondientes.

debugger
{
    function isEven(value) {
        if (typeof value === "number") {
            return value % 2 === 0;
        } else if (typeof value === "string") {
            const noSpace = value.replace(/\s+/g, '')
            return noSpace.length % 2 === 0;
        } else {
            return false;
        }
    }
/* he usado typeof porque al llegar a las strings no me funcionaba. De esta manera 
también podemos jugar con las strings */

/* he usado .replace() porque con .trim() sólo me eliminaba los espacios del principio
y del final. De esta manera le pedimos que busque cualquier espacio en blanco, ya sea uno
o más, consecutivos, y los substituya por '' */

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

}
//con las condiciones actuales, pasan todos los tests 
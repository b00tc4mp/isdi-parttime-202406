//str.At(indice)
//Version stand alone
function at(string, index) {

    /* TODO:
     Tenemos una palabra de tipo 'string' y tenemos un indice del tipo 'number'
    la tarea es que el indice localice el caracter de ese indice y devolver el
    caracter de esa posicion
    */
    if (typeof index !== 'number') {
        return 'index not defined'
    }
    if (index >= string.length) {
        return undefined
    }
    if (index < 0 && Math.abs(index) < string.length) {
        return string[string.length - Math.abs(index)]

    }
    return string[index]
}

const result1 = at("Hello", 2)
console.assert(result1 === "Hello".at(2), { result: result1, message: "Test 1 No pasado " })

const result2 = at("Hola", 2)
console.assert(result2 === "Hola".at(2), { result: result2, message: "Test 2 No pasado " })
debugger
const result3 = at("indexNegativo", -1)
console.assert(result3 === "indexNegativo".at(-1), { result: result3, message: "Test 3 No pasado " })
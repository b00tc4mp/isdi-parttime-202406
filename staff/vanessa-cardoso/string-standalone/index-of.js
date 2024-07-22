function indexOf (string, fromIndex) {
   

    return fromIndex
}

const result1 = indexOf("Negro", "g")
console.assert(result1 === "Negro".indexOf("g"), {result: result1, message: "Test 1 No pasado"})

const result2 = indexOf("Branco","o")
console.assert(result2 === "Hola".indexOf("o"), {result: result2, message: "Test 2 no pasado"})

const result3 = indexOf("casoSinIndice", "null")
console.assert(result3 === "casoSinIndice".indexOf("null"), {result: reult3, message: "Test 3 no pasado"})

   

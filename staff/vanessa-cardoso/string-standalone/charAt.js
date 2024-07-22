function charAt(string,index) {
    /* percorrer a cadeia de caracteries até chegar no index,
       devolver o caracter que ocupa a posiçao do index  
       */

    let result = string[index]

    if(typeof index !== "number") {
        result = string[0];
    }

    
    return result
    
}

const result1 = charAt("Hello", 2)
console.assert(result1 === "Hello".charAt(2),{result:result1, message: "Test 1 No pasado "})

const result2 = charAt("Hola", 3)
console.assert(result2 === "Hola".charAt(3),{result:result2, message: "Test 2 No pasado "})

const result3 = charAt("casoSinIndice", null)
console.assert(result3 === "casoSinIndice".charAt(null),{result:result3, message: "Test 3 No pasado "})

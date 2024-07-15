//str.includes(searchString)
//version stand alone

function includes(string, searchString) {
    //tenemos 2 cadenas de caracteres y tenemos que mirar si la segunda cadena de caracteres 
    //está incluido en la primer cadena de caracteres

    //"hola" te pregunto: "la" está incluida en la palavra "hola"
    //coges la palabraras que te han dado y busca si el primer caracter de la segunda palabra
    //coincide con alguno de los caracteres de la primeira palabra, en caso de que si
    //busca si el segundo caracter de la segunda palabra machea con el caracter consecutivo
    //al carcacter encontrado en la primera palabra
    // si todo machea, entonces devuelvo que ha ido bien, si no digo que no ha ido bien
}

const result1 = includes("Hello", "H")
console.assert(result1 === "Hello".includes("H"), {result: result1, message: "Test 1 No pasado"})

const result2 = includes("Hola","Ho")
console.assert(result2 === "Hola".includes("Ho"), {result: result2, message: "Test 2 no pasado"})

const result3 = includes("casoSinIndice", null)
console.assert(result3 === "casoSinIndice".includes(null), {result: reult3, message: "Test 3 no pasado"})

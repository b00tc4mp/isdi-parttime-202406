//str.includes(searchString)
//version stand alone

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
if (searchString === null) {
        return false;
    }
    
    if (searchString === "") {
        return true;
    }

    for (let i = 0; i <= string.length - searchString.length; i++) {
        let found = true;
        for (let j = 0; j < searchString.length; j++) {
            if (string[i + j] !== searchString[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return true;
        }
    }
    return false;
}

// Casos de teste para includes
const result1 = includes("Hello", "H");
console.assert(result1 === "Hello".includes("H"), {result: result1, message: "Test 1 no pasado"});

const result2 = includes("Hola", "Ho");
console.assert(result2 === "Hola".includes("Ho"), {result: result2, message: "Test 2 no pasado"});

const result3 = includes("casoSinIndice", null);
console.assert(result3 === "casoSinIndice".includes(null), {result: result3, message: "Test 3 no pasado"});

// Caso adicional para verificar string vazia
const result4 = includes("Hello", "");
console.assert(result4 === "Hello".includes(""), {result: result4, message: "Test 4 no pasado"});

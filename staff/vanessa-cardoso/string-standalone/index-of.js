/* método indexOf() devuelve el índice
 dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado, 
comenzando la búsqueda desde indiceDesde; o -1 si no se encuentra dicho valor.*/

// sintaxi: cadena.indexOf(valorBusqueda[, indiceDesde])
//checar se fromIndex esta dentro de string


function indexOf(string, substring, fromIndex = 0) {

    if (fromIndex < 0) fromIndex = 0;
    if (fromIndex >= string.length) return -1;
    
    for (let i = fromIndex; i <= string.length - substring.length; i++) {
       
        if (string.substring(i, i + substring.length) === substring) {
            return i;
        }
    }
    

    return -1;
}


const result1 = indexOf("Negro", "g");
console.assert(result1 === "Negro".indexOf("g"), { result: result1, message: "Test 1 no pasado" });

const result2 = indexOf("Hoy es un día muy caluroso!", "día");
console.assert(result2 === "Hoy es un día muy caluroso!".indexOf("día"), { result: result2, message: "Test 2 no pasado" });

const result3 = indexOf("casoSinIndice", "null");
console.assert(result3 === "casoSinIndice".indexOf("null"), { result: result3, message: "Test 3 no pasado" });


   

/*
To Upper case
Me da una palabra y paso sus minúsculas a mayúsculas

creo una lista de mayusculas y una de minusculas 
compruebo concorda
recorremos string y cada string[i] => string[j]
recorremos string y por cada posicion del string que sea caracter buscamos el indice del caracter
en la primera lista 
y lo sustituimos por el caracter de la segunda lista porque los indices son iguales 
devolvemos la variable alojada 

si el caracter que estamos recorriendo no existe en nuestra lista lo obviamos y sumamos +1 en la posición 

*/


let mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZÇÑ"
let minusculas = "abcdefghijklmnopqrstuvwxyz"

let inLowers = ""
let string = "Hola Mundo"
function toLoppercase(string){

for (let i = 0 ; i<string.length; i++)
    // recorremos el string 
    // si el caracter que estamos recorriendo por tanto i no existe en la lista sumamos posicion i 
    for (let j = 0; j<minusculas.length; j++)
        if (string[i]===mayusculas[j]){//recorremos la lista comprobando que este el caracter
            inUppers += minusculas[j]}// si essta lo sumamos
        else{ // sino sumamos el caracter correspondiente a la i que puede ser mayuscula ya u otros
            inLowers += string[i]
            // sumamos i 
            i++}
    


return inLowers // devolvemos 
        }


// Ejemplos de uso y aserciones

// Ejemplo 1: Texto en minúsculas
const result1 = toLoppercase("HELLO");
console.assert(result1 === "hello", { result: result1, message: "Test 1 no pasado" });

// Ejemplo 2: Texto mixto (mayúsculas y minúsculas)
const result2 = toLoppercase("HeLlO");
console.assert(result2 === "hello", { result: result2, message: "Test 2 no pasado" });

// Ejemplo 3: Texto sin letras minúsculas
const result3 = toLoppercase("123");
console.assert(result3 === "123", { result: result3, message: "Test 3 no pasado" });

// Ejemplo 4: Texto vacío
const result4 = toLoppercase("");
console.assert(result4 === "", { result: result4, message: "Test 4 no pasado" });

// Ejemplo 5: Texto con caracteres especiales y espacios
const result5 = toLoppercase("!@# abc XYZ");
console.assert(result5 === "!@# abc xyz", { result: result5, message: "Test 5 no pasado" });
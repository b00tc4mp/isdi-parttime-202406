/* 
método slice() extrae una sección de una cadena 
y devuelve una cadena nueva.
*/

 //for com dois índices: i e j ( indexA = i e indexB = j )  

 function sliceStr(string, indexA, indexB) {
    
    let newString = ""; // inicializa uma string vazia 
    
  //converter o indice negativo para um index positivo correspondente na string.
    if (indexA < 0) {
        indexA = string.length + indexA;
    }
    if (indexB === undefined) {
        indexB = string.length;
    } else if (indexB < 0) {
        indexB = string.length + indexB;
    }
    
     
    for(let i = indexA, j = 0; i < indexB && i < string.length; i++, j++) {
        
        newString += string[i] // add cada caracter a partir do indice especificado.
    }
   
    return newString
}


const result1 = sliceStr("Vamos a la piscina hoy?", 7, 14);
console.assert(result1 === "Vamos a la piscina hoy?".slice(7, 14), {
    result: result1, message: "Test 1 No Pasado"})

const result2 = sliceStr("Mi helado de limon",4, 12);
console.assert(result2 === "Mi helado de limon".slice(4, 12), {
    result: result2, message: "Test 2 No Pasado"})

const result3 = sliceStr("Mañana de Jullo", -3, -10);
console.assert(result3 === "Mañana de Jullo".slice(-3, -10), {
    result: result3, message: "Test 3 No Pasado"})


const result4 = sliceStr("Me gusta platano", -6);
console.assert(result4 === "Me gusta platano".slice(-6), {
    result: result4, message: "Test 4 No Pasado"})




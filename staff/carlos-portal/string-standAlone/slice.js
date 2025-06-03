
let str = "el otro dia vi un cisne azul"
let firstIndex = 3
let lastIndex = 6
let cadenaSliced = ""
// entra un string 
//selecciono un indice de entrada
//meto la cadena en un bucle for con limite inferior de entrada y superior de salida 
//itero copiando los valores
function slicing (str,firstIndex,lastIndex){
    for (let i = firstIndex; i< lastIndex ; i++){
         cadenaSliced += str[i]}
    return cadenaSliced}

console.log(slicing(str,firstIndex,lastIndex))
    
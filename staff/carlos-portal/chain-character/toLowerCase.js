
let inLowers = ""
let string = "Hola Mundo"
function toLowerCase(){
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZÇÑ"
const minusculas = "abcdefghijklmnopqrstuvwxyz"
for (let i = 0 ; i<this.length; i++)
    // recorremos el string 
    // si el caracter que estamos recorriendo por tanto i no existe en la lista sumamos posicion i 
    for (let j = 0; j<minusculas.length; j++)
        if (this.value[i]===mayusculas[j]){//recorremos la lista comprobando que este el caracter
            inUppers += minusculas[j]}// si essta lo sumamos
        else{ // sino sumamos el caracter correspondiente a la i que puede ser mayuscula ya u otros
            inLowers += this.value[i]
            // sumamos i 
            i++}



return inLowers // devolvemos 
        }

module.exports = toLowerCase
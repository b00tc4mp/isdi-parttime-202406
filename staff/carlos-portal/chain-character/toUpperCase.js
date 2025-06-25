let mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZÇÑ"
let minusculas = "abcdefghijklmnopqrstuvwxyz"

let inUppers = ""
let string = "Hola Mundo"
function toUppercase(){

for (let i = 0 ; i<this.length; i++)
    // recorremos el string 
    // si el caracter que estamos recorriendo por tanto i no existe en la lista sumamos posicion i 
    for (let j = 0; j<minusculas.length; j++)
        if (this.value[i]===minusculas[j]){//recorremos la lista comprobando que este el caracter
            inUppers += mayusculas[j]}// si essta lo sumamos
        else{ // sino sumamos el caracter correspondiente a la i que puede ser mayuscula ya u otros
            inUppers += this.value[i]
            // sumamos i 
            i++}



return inUppers // devolvemos 
        }

module.exports = toUppercase
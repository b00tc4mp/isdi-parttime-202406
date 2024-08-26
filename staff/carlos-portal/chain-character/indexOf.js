let patternFound = ""


function indexOf (patron){
// busqueda de palabra y devolvemos el indice la coincidencia 
// almacenamos el patron en una variable pattern found 
// si la variable es igual exactamente al patron es que la hemos encontrado 
// al encontrarla devolvemos su posicion 
for (let i = 0; i<this.length;i++){
    for (let j = 0; j<patron.length;j++){
        if( this.value[i+j]===patron[j]){
            patternFound += patron[j]
        }
        else{ break} // te rompo el bucle si no coincide
        
        if (patron === patternFound){
            match = true
            indice = i // aqui te digo lo que es el indice
            break // también te rompo el bucle si encontramos patron

        }




    }
    return match ? indice : -1 }// aqui uso un operador ternario bastante flashy 
}
module.exports = indexOf
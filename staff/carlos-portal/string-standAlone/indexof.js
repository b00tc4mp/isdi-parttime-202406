let patternFound = ""
let match = false // que te voy a contar si estas harto tu también de hacer variables match o found
let indice = -1 // menos 1 porque y si esta en posición 0? 

function indice (cadena,patron){
// busqueda de palabra y devolvemos el indice la coincidencia 
// almacenamos el patron en una variable pattern found 
// si la variable es igual exactamente al patron es que la hemos encontrado 
// al encontrarla devolvemos su posicion 
for (let i = 0; i<cadena.length;i++){
    for (let j = 0; j<patron.length;j++){
        if( cadena[i+j]===patron[j]){
            patternFound += patron[j]
        }
        else{ break} // te rompo el bucle si no coincide
       
        if (patron === patternFound){
            match = true
            indice = i // aqui te digo lo que es el indice
            break // también te rompo el bucle si encontramos patron

        }




    }
    return match ? indice : -1 // aqui uso un operador ternario bastante flashy 
}
// TDD 

const result1 = indice("hello","ll")
console.assert(result1 ===  "hello".indexOf("ll")),{
    result:result1, message:"Test no pasado"
}
const result2 = indice("lñdskfjnpoasensñdofnaoisejn`coimaeìoj","mae")
console.assert(result2 ===  "lñdskfjnpoasensñdofnaoisejn`coimaeìoj".indexOf("mae")),{
    result:result2, message:"Test no pasado"
}

const result3 = indice("el tdd me pone pasivo agresivo","feliz")
console.assert(result3 ===  "el tdd me pone pasivo agresivo".indexOf("feliz")),{
    result:result3, message:"Test no pasado"
}





}
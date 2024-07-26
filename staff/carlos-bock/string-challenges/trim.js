

//remueve espacios en blanco del string que estan en los extremos
//correr string para econtrar espacio 
//crear nuevo string que ignora los espacios al principio y al final 
//Si character nos es espacio guardarlo
//retornar nuevo string

function trim(string){
    let newString = "";
    
    for (let i = 0; i < string.length; i++) {
        if (string[i] != " ") {
            newString += string[i];            
        }
    }
    return newString;
}



const oldString = "    Esta string tiene muchos espacios.    ";

const result1 = trim(oldString);
console.assert(result1 === oldString.trim,{
  result: result1,
  message: "Test 1 No pasado ",
});
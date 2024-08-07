//Version 1, caso basico
//metodo acepta tanto un parametro como dos para el indice. 
//si hay un parametro de indice crea un nuevo string con ese valor y el resto de la cadena
//si hay dos parametros usa el primer indice hasta llegar al segundo para crear el nuevo string
//si los indices sone negativos se cuentan desde el final del string original. 

function slice(string, index1, index2) {
  let newString = "";

  for (let i = index1; i < index2; i++) {
          newString += string[i]; 
      }
  return newString;
}



const string1 = "Madrid es la mejor ciudad del mundo."
const indexOne = 6;
const indexTwo = 12;


const result1 = slice(string1, 1, 3 );
console.assert(result1 === string1.slice(1, 3),{
  result: result1,
  message: "Test 1 No pasado ",
});
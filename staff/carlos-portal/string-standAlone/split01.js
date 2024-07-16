

//split
//almacenar datos en array en valor string rompiendo a traves de un patron 
//el patron no se almacena 


let string = ""
let array = []


function breakup ( string, pattern){
for (let i = 0 ; i<string.length ; i++)
    for (let j = 0 ; j< pattern.length;j++)
        while  (string[i] !== pattern[j])
        { array.push(string[i])
        break 
        }

return array


}
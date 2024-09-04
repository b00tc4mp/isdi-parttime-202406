//el metodo tiene un parametro de entrada, que es un segundo string 
//el metodo devuelve el valor correspondiente al indice de la primara aparición del segundo string. 
//en caso no hay parametro devuelve un -1

function indexOf(...strings) {

    let index = 0;
    
    if (typeof strings[1] === 'undefined') {
        index = -1; 
    } else {
        for (let i = 0; i < strings[0].length; i++) {
            let counter = 0;
            for (let j = 0; j < strings[1].length; j++) {
                if (strings[0][i+j] === strings[1][j]){
                    counter++;
                    if (counter === strings[1].length) {
                        index = i;
                        return index
                    }
                }
            }
            
        }
        
    }
    
    return index;
}


const string1= 'Este string tiene gatos, los gatos son guay.';
const string2= 'gatos';

const string3= 'Dogs are cool.';
const string4= 'Dogs';



const result1 = indexOf(string1, string2);
console.assert(result1 === string1.indexOf(string2),{
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = indexOf(string3, string4);
console.assert(result2 === string3.indexOf(string4),{
  result: result2,
  message: "Test 2 No pasado ",
});
debugger
const result3 = indexOf(string1);
console.assert(result3 === string1.indexOf(),{
  result: result2,
  message: "Test 3 No pasado ",
});
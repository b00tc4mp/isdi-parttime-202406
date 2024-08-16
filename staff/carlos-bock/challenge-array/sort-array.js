//toma un array sortea en orden alfabetico
//modifica array original
//si array es de numeros sortea numericamente por los digitos individuales y no por el valor absoluto de número


function sort(array) {

    for (let i = 0; i < array.length; i++) {
       
        for (let j = 0; j < array.length; j++) {
          if(array[i+j] >= array[i+j+1]){
              let tempElement = array[i+j];
              array[i+j] = array[i+j+1];
              array[i+j+1] = tempElement;
              
                }
            if(array[i+j] <= array[i+j-1]){
              let tempElement = array[i+j];
              array[i+j] = array[i+j-1];
              array[i+j-1] = tempElement;
              
                }
            if(array[array.length-j] <= array[array.length-j-1]){
                let tempElement = array[array.length-j-1];
                array[array.length-j-1] = array[array.length-j];
                array[array.length-j] = tempElement;
            }
            /*if(array[array.length-j] <= array[array.length-j-1]){
                let tempElement = array[array.length-j-1];
                array[array.length-j-1] = array[array.length-j];
                array[array.length-j] = tempElement;
            }*/
            }
    
    }
    tempArray = array;
    return array;
}

const array1 = [3, 1, 4, 9, 10, 0, 30, 4]
const array2= ["a", "x", "d", "z", "g","b", "c"]

console.log(sort(array1));
debugger;
console.log(sort(array2));


//console.log(array1.sort());

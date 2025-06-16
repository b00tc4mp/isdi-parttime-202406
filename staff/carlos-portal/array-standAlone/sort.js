function ordenar(array) {
   let swapped = true;

   while (swapped) {
       swapped = false; // Reinicia el indicador de intercambio
       let i = 0; // Reinicia el índice en cada pasada

       while (i < array.length - 1) { //Cambio de manos [A == B == C]
           if (array[i] > array[i + 1]) {
               let stash = array[i];//A
               array[i] = array[i + 1];//B
               array[i + 1] = stash;//C
               swapped = true; 
           }
           i++; 
       }
   }

   return array; 
}

function arrayIsEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}


const array1 = [5, 2, 9, 1, 5, 6];
const result1 = ordenar(array1);
console.assert(arrayIsEqual(result1, [1, 2, 5, 5, 6, 9]), {
    result: result1,
    message: "Test 1 No pasado:  ",
});

const array2 = [1, 2, 3, 4, 5];
const result2 = ordenar(array2);
console.assert(arrayIsEqual(result2, [1, 2, 3, 4, 5]), {
    result: result2,
    message: "Test 2 No pasado:  ",
});

const array3 = [9, 7, 5, 3, 1];
const result3 = ordenar(array3);
console.assert(arrayIsEqual(result3, [1, 3, 5, 7, 9]), {
    result: result3,
    message: "Test 3 No pasado:  ",
});

function quickSort(array) {
  
    const pivot = array[array.length - 1]
    const left = []
    const right = []
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]); 
        } else {
            right.push(array[i]);
        }
    }

    // Recursión
    return [...quickSort(left), pivot, ...quickSort(right)];
}
//the fastest one and also the slowest
function luckySort(array) {
    const shuffled = [...array]; 

    for (let i = 0; i < shuffled.length; i++) {
        const randomIndex = Math.floor(Math.random() * shuffled.length);
        
        //Cambio de manos 
        let temp = shuffled[i];
        shuffled[i] = shuffled[randomIndex];
        shuffled[randomIndex] = temp;
    }
    return shuffled;
}

function luckyBrute(array){
    let result;
    const sortedArray = quickSort(array)
    while (!arrayIsEqual(result,sortedArray)){
         result = luckySort(array)
    }
    return result
}

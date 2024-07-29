// adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array

function arrayPush(array, ...newElement){

    let newArray = new Array(array.length + newElement.length); //criar um array com um tamanho maior para add o novo elemento

      //copiando os elementos para newArray
    for(let i = 0; i < array.length; i++) {
         newArray[i] =  array[i];
    }

    //add elemento ao final (array.length é o espaço vazio do nov array que podemos add o novo elemento.)
   for(let i = 0; i < newElement.length; i++) {
    
    if (newElement[i] !== null) {
        newArray[array.length + i] = newElement[i];
    } else {
        // para que ignora o elemento null
        newArray.length--;
    }
    
   }

    return newArray;
}

const result1 = arrayPush(['A', 'B', 'C'], 'D');
console.assert(JSON.stringify(result1) === JSON.stringify(['A', 'B', 'C','D']), {
    result: result1,
    message: 'Teste 1 não passou'
});

const result2 = arrayPush(['A', 'B', 'C'], 'D', 'E', 'F');
console.assert(JSON.stringify(result2) === JSON.stringify(['A', 'B', 'C', 'D', 'E', 'F']), {
    result: result2,
    message: 'Teste 2 não passou'
});

const result3 = arrayPush(['H', 'I', 'J'], null);
console.assert(JSON.stringify(result3) === JSON.stringify(['H', 'I', 'J']), {
    result: result3,
    message: 'Teste 3 não passou'
});

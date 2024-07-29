
// elimina el último elemento de un array y lo devuelve

function arrayPop(array) {
    // verif se o array está vazio, se for o caso retorna undefined 
    if (array.length === 0) {
        return undefined;
    }

    //  novo array 
    let newArray = new Array(array.length - 1);

    // copiar os elementos para newArray menos o ultimo
    for (let i = 0; i < array.length - 1; i++) {
        newArray[i] = array[i];
    }

    
    return newArray;
}

       /*JSON.stringify é transforma ambos os arrays em strings JSON para que possam ser comparados diretamente;
          no armazenamento: Converte dados para string para armazenar em bancos de dados ou arquivos;
          Debugging: Facilita a visualização de objetos e arrays complexos
          */

const result1 = arrayPop(['casa', 'perro', 'gato', 'naranja']);
console.assert(JSON.stringify(result1) === JSON.stringify(['casa', 'perro', 'gato']), {
    result: result1,
    message: 'Teste 1 não passou'
});

const result2 = arrayPop(['uno', 'dos', 'tres']);
console.assert(JSON.stringify(result2) === JSON.stringify(['uno', 'dos']), {
    result: result2,
    message: 'Teste 2 não passou'
});

const result3 = arrayPop([]);
console.assert(result3 === undefined, {
    result: result3,
    message: 'Teste 3 não passou'
})


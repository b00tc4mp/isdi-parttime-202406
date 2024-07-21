function split(string, splicer) {
    let holder = [];        // Array para almacenar las partes
    let actPart = '';       // Variable para acumular caracteres
    
    for (let i = 0; i < string.length; i++) {
        //Verificar el separador
        if (string[i] === splicer) {
            // Solo agrega actPart a holder si no está vacío
            if (actPart.length > 0) {
                //Crea una copia del array holder actual
                let tempArray = holder;
                holder = []; //Holder se reinicia

                //Copiar los elementos de tempArray a Holder
                for (let j = 0; j < tempArray.length; j++) {
                    holder[j] = tempArray[j];
                }
                //Agregar actPart al final de Holder
                holder[holder.length] = actPart;
                actPart = ''; //Reiniciamos actPart para la siguiente parte
            }
        } else {
            actPart += string[i]; // Acumula el carácter actual en actPart
        }
    }
    
    // Agrega la última parte solo si no está vacía al acabar el bucle
    if (actPart.length > 0) {
        //Crea una copia de holder
        let tempArray = holder;
        holder = []; //Reiciniamos para la siguiente parte
        for (let j = 0; j < tempArray.length; j++) {
            holder[j] = tempArray[j];
        }
        //Metemos actPart al final de holder
        holder[holder.length] = actPart;
    }
    
    return holder;
}


const result1 = split('apple,banana,orange', ',');
console.assert(result1[0] === 'apple' && result1[1] === 'banana' && result1[2] === 'orange', {
    result: result1,
    message: 'Test 1 No superado',
});

const result2 = split(',Inicio,medio,fin,', ',');
console.assert(result2[0] === 'Inicio' && result2[1] === 'medio' && result2[2] === 'fin' && result2.length === 3, {
    result: result2,
    message: 'Test 2 no superado',
});

const result3 = split('sinSeparadores ni nada por el estilo', ',');
console.assert(result3[0] === 'sinSeparadores ni nada por el estilo' && result3.length === 1, {
    result: result3,
    message: 'Test 3 no superado',
});
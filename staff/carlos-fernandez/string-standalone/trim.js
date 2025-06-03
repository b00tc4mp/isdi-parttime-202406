function trim(string) {
    let start = 0;
    let end = string.length - 1;

    // Encontrar el primer carácter no blanco al principio de la cadena
    while (start <= end && string[start] === ' ') {
        start++;
    }

    // Encontrar el último carácter no blanco al final de la cadena
    while (end >= start && string[end] === ' ') {
        end--;
    }

    // Si la cadena está vacía o solo contenía espacios en blanco
    if (start > end) {
        return '';
    }

    // Crear una nueva cadena que va del carácter en `inicio` hasta el carácter en `fin`
    let result = '';
    for (let i = start; i <= end; i++) {
        result += string[i];
    }

    return result;
}

// Ejemplo de uso
let result1 = trim(' AAAaaAAa   ');
console.assert(result1 === ' AAAaaAAa   '.trim(), {result: result1, message: 'Test 1 no pasado'});

let result2 = trim(' aaa');
console.assert(result2 === ' aaa'.trim(), {result: result2, message: 'Test 2 no pasado'});

let result3 = trim('aaa ');
console.assert(result3 === ' aaa'.trim(), {result: result3, message: 'Test 3 no pasado'});
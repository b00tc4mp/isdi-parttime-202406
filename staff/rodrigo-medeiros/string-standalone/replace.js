debugger
function customReplace(str, searchValue, replaceValue) {
    if (typeof str !== 'string') {
        throw new TypeError('First argument must be a string');
    }

    // Convertimos searchValue a string si no es una expresión regular
    if (!(searchValue instanceof RegExp)) {
        searchValue = String(searchValue);
    }

    // Convertimos replaceValue a string
    replaceValue = String(replaceValue);

    // Si searchValue es una cadena vacía
    if (searchValue === "") {
        let result = "";
        for (let i = 0; i < str.length; i++) {
            result += replaceValue + str[i];
        }
        return result + replaceValue;
    }

    // Si searchValue es una expresión regular (solo sin la bandera global)
    if (searchValue instanceof RegExp) {
        let match = searchValue.exec(str);
        if (match) {
            let index = match.index;
            let result = "";
            for (let i = 0; i < index; i++) {
                result += str[i];
            }
            result += replaceValue;
            for (let i = index + match[0].length; i < str.length; i++) {
                result += str[i];
            }
            return result;
        }
        return str;
    }

    // Si searchValue es una cadena
    let result = "";
    let found = false;
    let i = 0;
    while (i < str.length) {
        let match = true;
        for (let j = 0; j < searchValue.length; j++) {
            if (str[i + j] !== searchValue[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            result += replaceValue;
            i += searchValue.length;
            found = true;
            break;
        } else {
            result += str[i];
            i++;
        }
    }

    // Añadir el resto de la cadena después del reemplazo
    if (!found) {
        return str;
    }
    while (i < str.length) {
        result += str[i];
        i++;
    }

    return result;
}
const result1 = customReplace('hola mundo','mundo', 'universo')
  console.assert(result1 === 'hola mundo'.replace('mundo','universo'), {result: result1, message: "Test 1 No pasado "})
  
const result2 = customReplace('hola mundo','mundo', 'galaxia')
  console.assert(result1 === 'hola mundo'.replace('mundo','galaxia'), {result: result1, message: "Test 1 No pasado "})

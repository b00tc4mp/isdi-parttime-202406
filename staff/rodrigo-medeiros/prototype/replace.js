debugger
function replace (searchValue, replaceValue) {
    if (typeof this.value !== 'string') {
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
            result += replaceValue + this.value[i];
        }
        return result + replaceValue;
    }

    // Si searchValue es una expresión regular (solo sin la bandera global)
    if (searchValue instanceof RegExp) {
        let match = searchValue.exec(this.value);
        if (match) {
            let index = match.index;
            let result = "";
            for (let i = 0; i < index; i++) {
                result += this.value[i];
            }
            result += replaceValue;
            for (let i = index + match[0].length; i < this.length; i++) {
                result += this.value[i];
            }
            return result;
        }
        return this.value;
    }

    // Si searchValue es una cadena
    let result = "";
    let found = false;
    let i = 0;
    while (i < this.length) {
        let match = true;
        for (let j = 0; j < searchValue.length; j++) {
            if (this.value[i + j] !== searchValue[j]) {
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
            result += this.value[i];
            i++;
        }
    }

    // Añadir el resto de la cadena después del reemplazo
    if (!found) {
        return this.value;
    }
    while (i < this.length) {
        result += this.value[i];
        i++;
    }

    return result;
}
module.exports = replace
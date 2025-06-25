function startsWith(starter) {
    if (this.value == null || starter == null|| starter.length>this.value.length) {
        return "";
        // aquqi un if por si se dan valores no validos o el patron es mayor que la palabra 

    }
    let i = 0;
    while (i < starter.length) {// hago un bucle que itere sobre el starter y compruebo que el  starter esta incluido
        if (value[i] !== starter[i]) {
            return false;
        }
        i++;
    }
    return true; //si todo concuerda 
}

module.exports = startsWith
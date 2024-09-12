//el metodo tiene un parametro de entrada, que es un segundo string 
//el metodo devuelve el valor correspondiente al indice de la primara aparición del segundo string. 
//en caso no hay parametro devuelve un -1

function indexOf(parametro) {

    let index = 0;
    
    if (typeof parametro === 'undefined') {
        index = -1; 
    } else {
        for (let i = 0; i < this.value.length; i++) {
            let counter = 0;
            for (let j = 0; j < parametro.length; j++) {
                if (this.value[i+j] === parametro[j]){
                    counter++;
                    if (counter === parametro.length) {
                        index = i;
                        return index
                    }
                }
            }
            
        }
        
    }
    
    return index;
}

module.exports = indexOf;
//el metodo tiene un parametro de entrada, que es un segundo string 
//el metodo devuelve el valor correspondiente al indice de la primara aparición del segundo string. 
//en caso no hay parametro devuelve un -1

function indexOf() {

    let index = 0;
    
    if (typeof this.value[1] === 'undefined') {
        index = -1; 
    } else {
        for (let i = 0; i < this.value[0].length; i++) {
            let counter = 0;
            for (let j = 0; j < this.value[1].length; j++) {
                if (this.value[0][i+j] === this.value[1][j]){
                    counter++;
                    if (counter === this.value[1].length) {
                        index = i;
                        return index
                    }
                }
            }
            
        }
        
    }
    
    return index;
}

module.export = indexOf;
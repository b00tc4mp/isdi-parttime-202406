// segunda versión de sort con while

function sort(array){
    
    let change = true;
    let initiate = 0;

    while (change === true){
        change = false;

        for (let i = 0; i < array.length; i++) {
            if (array[i] > a[i+1]) {
                let tempElement = array[i];
                array[i] = array[i+1];
                array[i+1] = tempElement;
                change = true;
            }
            if(array[array.length-i] <= array[array.length-i-1]){
                let tempElement = array[array.length-i-1];
                array[array.length-i-1] = array[array.length-i];
                array[array.length-i] = tempElement;
                change = true;
            }
        } 
        if (change == false)
            break;
    }
    return array;
}


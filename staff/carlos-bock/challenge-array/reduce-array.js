// ejeccuta una función reductora sobre cada elemento del array pasado
// devuelve como resultado un único valor
// reduce(callback)
// reduce(callback, initialValue)

function reduce(...paramaters) {
    const array = paramaters[0];
    const callback = paramaters[1];
    const initialValue = paramaters[2];

    if (paramaters.length === 2) {
        let accumulator = 0
        for (leti = 0;i < array.length;i++) {
            accumulator += callback(array[i]);
            
        }
    }
}



///////////////////
//function de callback
function sumOf(element) {
    let counter= 0;
    counter 
}
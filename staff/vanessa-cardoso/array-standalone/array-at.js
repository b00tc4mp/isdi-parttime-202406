/*
método at() recibe un valor numérico 
 y devuelve el elemento en esa posición. 
*/

function arrayAt(array,index) {

    if (typeof index !== 'number') {
        index = 0;
    }

    if(index < 0) {
        index = array.length + index;
    }

    return array[index];
}

const array = ["lima","uva","platano","naranja","melon"]

const result1 = arrayAt(array, 2)
console.assert(result1 === array.at(2),{result:result1, message: "Test 1 No pasado "})

const result2 = arrayAt(array, -2)
console.assert(result2 === array.at(-2),{result:result2, message: "Test 2 No pasado "})

const result3 = arrayAt("casoSinIndice", null)
console.assert(result3 === "casoSinIndice".at(null),{result:result3, message: "Test 3 No pasado "})



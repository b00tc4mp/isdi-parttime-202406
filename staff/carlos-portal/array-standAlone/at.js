
function at(array, posicion) {
    if (typeof posicion === 'number') { 
        if (posicion >= 0) {
            return array[posicion];
        } else {
            return array[array.length + posicion];
        }
    } else if (posicion === undefined) {
        return array[0];
    }
}


const array1 = [0,1,2,3,4,5,6,7,8,9,10];
const result1 = at(array1, 3);
console.assert(result1 === array1.at(3),{
  result: result1,
  message: "Test 1 no pasado",
});

const array2 = [0,1,2,3,4,5,6,7,8,9,10];;
const result2 = at(array2, -2);
console.assert(result2 === array2.at(-2),{
  result: result2,
  message: "Test 2 no pasado",
});

const array3 =[0,1,2,3,4,5,6,7,8,9,10];;
const result3 = at(array3);
console.assert(result3 === array3.at(),{
  result: result3,
  message: "Test 3 no pasado",
});

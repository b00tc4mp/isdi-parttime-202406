//Une dos o más arrays sin cambiarlos sino añadiendolos a uno nuevo 

function concat (...arguments){
    let result = []
    for (const array of arguments) {
        for(const value of array) {
            result.push(value)
    }
}
return result }


const array1 = [0,1,2,3,4,5,6,7,8,9,10];
const array2 = [0,1,2,3,4,5]
const array3 = [10,9,8,7,6,5,4,3,2,1,0]
const array4 = ['a','b','c']



console.log(concat(array1,array2))


const result1 = concat(array1,array2);
console.assert(result1 === array1.concat(array2),{
  result: result1,
  message: "Test 1 no pasado",
});

const result2 = concat(array1,array2,array3);
console.assert(result2 === array1.concat(array2,array3),{
  result: result2,
  message: "Test 2 no pasado",
});

const result3 = concat(array4);
console.assert(result3 === array4.concat(),{
  result: result3,
  message: "Test 3 no pasado",
});



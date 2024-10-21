

function copyWithin(array,iPegado,loopStarter,loopFinisher) {
    if (iPegado === undefined){iPegado = 0}
    if (loopStarter === undefined){loopStarter = 0}
    if (loopFinisher === undefined) {loopFinisher = array.length}
    // casos iniciales ajustados
    
    for (let i = 0;i< loopFinisher-loopStarter;i++){
        array[iPegado+i] = array[loopStarter+i]

    }
    return array
}
    
const array1 = [0,1,2,3,4,5,6,7,8,9,10]

const result1 = copyWithin(array1,2,4,6);
console.assert(result1 === array1.copyWithin(2,4,6),{
  result: result1,
  message: "Test 1 no pasado",
});
const result2 = copyWithin(array1,4,5);
console.assert(result2 === array1.copyWithin(4,5),{
  result: result2,
  message: "Test 2 no pasado",
});
const result3 = copyWithin(array1,1);
console.assert(result3=== array1.copyWithin(1),{
  result: result3,
  message: "Test 3 no pasado",
});
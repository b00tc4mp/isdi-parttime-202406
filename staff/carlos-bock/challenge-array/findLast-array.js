//itera al revez el array 
//devuelve primera que satisfaga la condición 

function findLast(array,callBack) {

    for (let i = array.length-1; i >= 0; i--) {
        if(callBack(array[i])) return array[i];
    }
    return undefined;
}

const array1 = [1, 2, 3, 4, 5];
const result1 = findLast(array1, (element) => element > 4);
console.assert(result1 === array1.findLast((element) => element > 4), {
  result: result1,
  message: "Test 1 No pasado",
});


const array2 = ["a", 20, "a", 40, -1];
const result2 = findLast(array2, (element) => typeof element !== "number");
console.assert(result2 === array2.findLast((element) => typeof element !== "number"), {
  result: result2,
  message: "Test 2 No pasado",
});

const array3 = [1, 2, 3, 4, 5];
const result3 = findLast(array3, (element) => typeof element === "number");
console.assert(result3 === array3.findLast((element) => typeof element === "number"), {
  result: result3,
  message: "Test 3 No pasado",
});

//completado
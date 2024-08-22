//iterates through an array and return the index of the of the first match;
//second parameter can be passed to indicate whether we are looking for another instance
//return -1 if the item is not found in the array

function indexOf(...arguments){
    const array = arguments[0]
    let index = 0

    //go through array
    //compare current array item to arrgument 
    if (arguments.length <3) {
        for (let i = 0; i < array.length; i++){
            if (array[i] === arguments[1]){
                index = i;
                break; 
            } 
            if (array[i] !== arguments[1]){
                index = -1;
            }
        }
    } else if (arguments.length = 3) {
        for (let i = arguments[2]; i< array.length; i++){
            if (array[i] === arguments[1]){
                index = i;
                break;
            }
            if (array[i] !== arguments[1]){
                index = -1;
            }
        }

    }
    return index;
}

const array1 = ["this", "array", "has", 5, "items", "has", "one more"];
const result1 = indexOf(array1, "has");
console.assert(result1 === array1.indexOf("has"), {
    result: result1,
    message: "Test 1 no pasado",
});

const array2 = ["this", "array", "has", 5, "items", "has", "one more"];
const result2 = indexOf(array2, "has", 2);
console.assert(result2 === array2.indexOf("has",2), {
    result: result2,
    message: "Test 2 no pasado",
});

const array3 = ["this", "array", "has", 5, "items", "has", "one more"];
const result3 = indexOf(array3, "gohan");
console.assert(result3 === array3.indexOf("gohan"), {
    result: result3,
    message: "Test 3 no pasado",
});

//completado
//consider refactor to avoid break 
//switch to a while loop when refacatoring, break is temp so we don't iterate until second position, could also do a nested if

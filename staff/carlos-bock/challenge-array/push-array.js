// done add asserts
// method modifies array 
// pushes new items into the end of the array
// returns updated array length

function push(array,...items) {
    const tempArray =[];

    for (let i = 0; i < items.length; i++) {
        tempArray[i] = items [i];
        array[array.length] = tempArray[i];
    }
    return array.length;
}


const array1 = ["this", "array", "has", 5, "items"];

console.log(push(array1, "no", "more"));
console.log(array1);
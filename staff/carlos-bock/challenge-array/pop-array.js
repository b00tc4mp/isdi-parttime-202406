//done add asserts 
//removes last element from array returns modified array 
//stores poped element 
//loop through array and save values minus the last element
//set array equal to temparray

function pop(array){
    const tempArray =[];
    let index = array.length-1;
    let popped = array[index];

    for (let i = 0; i < array.length-1; i++) {
        tempArray[i] = array [i];
    }
    array = tempArray;
    return popped;
}

const array1 = ["this", "array", "has", 5, "items"];

//const test = array1.pop();

//console.log(test);
debugger
console.log(pop(array1));
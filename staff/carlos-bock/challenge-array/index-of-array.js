//done with base cases add asserts
//consider refactor to avoid break 
//check for weird cases like negative index numbers


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
                break; //switch to a while loop when refacatoring
                //break is temp so we don't iterate until second position
                //could also do a nested if
            }
        }
    } else if (arguments.length = 3) {
        let counter = 0
        for (let i = 0; i< array.length; i++){
            if (array[i] === arguments[1]){
                counter++;
                if (counter === arguments[2]){
                    index = i;
                }
            }
        }

    }
    return index;
}

const array1 = ["this", "array", "has", 5, "items", "has", "one more"];

console.log(indexOf(array1, "has"));
console.log(indexOf(array1, "has",2));

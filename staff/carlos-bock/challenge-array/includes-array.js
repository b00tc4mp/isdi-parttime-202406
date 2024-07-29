//done with base cases add console.asserts
//and check if there are weird index conditions


//iterates through an array 
//if parameter is equal to any element inside the array 
//return true
//else return false;
//base case resolved, refactor for if an additional index is included. 

function includes(...argument){
    const tempArray = argument[0]
    let result = false;

    if (argument.length < 3) {
        for (let i = 0; i < tempArray.length; i++){
            if (tempArray[i] === argument[1]){
                result = true;
            }
        }

    }

    if (argument.length === 3) {
        for (let i = 0; i < tempArray.length; i++){
            if (tempArray[i]=== argument[1] && i === argument[2]){
                result = true;
            }
        }
    }

    return result;
}

const array1 = ["goku", "sonic", "kakashi", "spiderman"]

console.log(includes(array1, "kakashi"));
console.log(includes(array1, "kakashi", 2));
console.log(includes(array1, "kakashi", 3));
console.log(array1.includes("kakashi",2));


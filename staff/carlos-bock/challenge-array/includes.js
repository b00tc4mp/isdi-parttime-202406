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
const result1 = includes(array1, "kakashi");
console.assert(result1 === array1.includes("kakashi"), {
    result: result1,
    message: "Test 1 no pasado",
});

const array2 = ["goku", "sonic", "kakashi", "spiderman"]
const result2 = includes(array2, "kakashi", 2);
console.assert(result2 === array2.includes("kakashi",2), {
    result: result2,
    message: "Test 2 no pasado",
});

const array3 = ["goku", "sonic", "kakashi", "spiderman"]
const result3 = includes(array3, "kakashi", 3);
console.assert(result3 === array3.includes("kakashi",3), {
    result: result3,
    message: "Test 3 no pasado",
});

// completado

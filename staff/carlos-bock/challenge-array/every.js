

function every(array,callback){
    if (!(array instanceof Array)) return undefined;

    let result = true;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (!callback(element)) result = false;
    }

    return result;
}



//tdd
const noArray = "foo";
const result1 = every(noArray, (item)=> typeof item === "number");
console.assert(result1 === undefined, {
    result: result1,
    message: "Test 1 No pasado",
})

const array2 = [10,20,30,40,50];
const result2= every(array2, (item) => typeof item === "number");
console.assert(result2 === array2.every((item) => typeof item === "number"), {
    result: result2,
    message: "Test 2 No pasado",
});  
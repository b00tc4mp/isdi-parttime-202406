// done add asserts
//at method takes paramater representing the array index
//if no parameter is passed, index = 0 
//if parameter is greatter than 0 return array item at that index
//if parameter is less than 0, value equals array lenth minus negative index

function at(array, index){
    if (index !== undefined && index >0){
        return array[index];
    }
    else if (index === undefined){
        return array[0];
    }
    else if (index < 0){ 
        let newIndex = array.length+index;
        return array[newIndex];
    }

}

const array1 = ["this", "array", "has", 5, "items"];

console.log(array1.at(3));
console.log(at(array1, 3));

console.log(array1.at());
console.log(at(array1));

debugger;
console.log(array1.at(-2));
console.log(at(array1,-2));

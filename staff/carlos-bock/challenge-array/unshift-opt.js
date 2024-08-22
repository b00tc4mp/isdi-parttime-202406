//optional 
//takes array and modifies it by adding an element at the begining
//create a temp array first value of temparray equals pushed parameter
//iterate through the array parameter and pass values into the temp array.
//set orginal array equal to temp array. 
//return modified array

function unShift(array,unShiftItem) {
    const tempArray = [];
    tempArray [0] = unShiftItem;

    for (let i = 0; i < array.length; i++) {
        tempArray[i+1] = array[i];
    }
    array = tempArray;
    return array.length;
}

function unShift2(array,unShiftItem) {
    let counter =0 ;

    for (let i = 1; i < array.length+1; i++) {
        array[counter]= array[i];
        counter++;
    }
    array[0] = unShiftItem;
    return array;
}




const array1 = ["this", "array", "has", 5, "items"];

//console.log(array1.unshift("not"));
console.log(unShift(array1, "not"));
unShift(array1, "not");
console.log(array1);
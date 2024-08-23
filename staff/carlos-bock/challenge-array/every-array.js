

function every(array,callback){
    let result = false;



    return result;
}




//callback
const lessThan = (currentValue) => currentValue < 25;


//tdd
const array1 = [10,20,30,40,50];
const result1= every(array1, lessThan(currentValue));
const testArray1 = [10,20,30,40,50];
const testResult1 = array1.every(lessThan(currentValue));
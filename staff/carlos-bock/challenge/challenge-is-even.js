// 1. Crea una función que devuelva true o false si el número
// pasado por parámetro es par o impar. Crea los test correspondientes.

//debugger
//{
function isEven(value) {
    var result
    if (typeof value !== 'number' && typeof value !== 'string') {
        result = false;
        console.log("wrong data type, please enter a number or string")
    }
    else if (typeof value === 'number') {
        if (value % 2 == 0) {
            result = true;
            console.log("test passed");;
            return result;
    }
        else {
            result = false;
            console.log("test failed");
            return result;
        };
    }
    else if (typeof value === 'string') {
            let i = value.length
            if (i % 2 == 0) {
                result = true;
                console.log("test passed");;
                return result;
        }
            else {
                result = false;
                console.log("test failed");
                return result;
            };
        }
    else if (value > Number. MAX_SAFE_INTEGER) { // I am having trouble making this one work
        result = false;
        console.log("the numbers is too big");
        return result; //the test passes for some reason, is this a limitation of JS?
    }
    
    
}

isEven("this");
isEven(2);
isEven(3);
isEven("failure");
isEven([1,2,"pie"]);
isEven(Number.MAX_SAFE_INTEGER + 2); // test is passing, likely unpredictable behavior in JS due to max integer

/*let result1 = isEven(1)
isEven(1);
console.assert(result1 === false, {result: result1, message: 'Test 1 no pasado'})  
// I think the client's testing parameters, result1 is not matching the result variable

let result2 = isEven(2)
console.assert(result2 === true, {result: result2, message: 'Test 2 ha pasado'}) */

/*let result3 = isEven(0)
console.assert(result3 === true, {result: result3, message: 'Test 3 no pasado'})

let result4 = isEven('hola')
console.assert(result4 === true, {result: result4, message: 'Test 4 no pasado'})

let result5 = isEven('adios')
console.assert(result5 === false, {result: result5, message: 'Test 5 no pasado'})

let result6 = isEven(Number.MAX_SAFE_INTEGER)
console.assert(result6 === false, {result: result6, message: 'Test 6 no pasado'})

let result7 = isEven(Number.MAX_SAFE_INTEGER + 1)
console.assert(result7 === true, {result: result7, message: 'Test 7 no pasado'})*/

//}
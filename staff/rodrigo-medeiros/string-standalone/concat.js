// Challenge concat, 

function concatString (...args) {
    let result = ''
    for (let i = 0; i < args.length; i++) {
        result += args[i] 
    }  
return result
}
debugger
const result1 = concatString("Buenos ", "dia!");
console.assert(result1 === "Buenos ".concat("dia!"), {result: result1, message: "Test 1 No pasado."});
const result2 = concatString("Tudo ", " ", "bem?");
console.assert(result2 === "Tudo ".concat( " ", "bem?"), {result: result2, message: "Test 2 No pasado."});
const result3 = concatString("Tenho ", "2 ", "hermanas");
console.assert(result3 === "Tenho ".concat(  "2 ", "hermanas"), {result: result3, message: "Test 3 No pasado."});
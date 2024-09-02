
const ChainCharacters = require("./");

function compare(array1, array2) {
    let result = true;
    let i = 0;
    if (array1.length !== array2.length) return false;
    while (i < array1.length) {
        if (array1[i].value !== array2[i]) {
            result = false;
        }
        i++;
    }
    return result;
}


//const str = 'Esta es una oración que tiene que estar split.';
const pattern = "";
const pattern2 = " ";
const pattern3 = "q";
const pattern4 = "e";

//const result1 = split(str, pattern);
//const result2 = split(str, pattern2);
//const result3 = split(str, pattern3);
//const result4 = split(str, pattern4);


const result1 = new ChainCharacters('Esta es una oración que tiene que estar split.').split(pattern);
console.assert(compare(result1, 'Esta es una oración que tiene que estar split.'.split(pattern)),{
    result: result1,
  message: "Test 1 No pasado ",
});

/*
console.assert(compare(result2, str.split(pattern2)),{
    result: result2,
    message: "Test 2 No pasado ",
  });

console.assert(compare(result3, str.split(pattern3)),{
    result: result3,
    message: "Test 3 No pasado ",
  });

console.assert(compare(result4, str.split(pattern4)),{
    result: result4,
    message: "Test 3 No pasado ",
  });
  */